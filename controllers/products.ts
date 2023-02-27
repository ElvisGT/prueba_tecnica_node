import { Request, Response } from "express";
import Product from '../models/product';
import Store from '../models/store';
import {Products} from '../type/products';


const getProducts = async(req: Request, res: Response) => {
    const products = await Store.find({}).populate('product',['name','price'])
    
    res.json({results:products});
};

const getProductByID = async(req: Request, res: Response) => {
    const {id} = req.params;
    const product = await Store.findOne({product:id});
    
    res.json({product});
}

const createProduct = async(req: Request, res: Response) => {
    const {name,price,amount}:Products = req.body;
    const product = new Product({name,price,amount});
    const productToStore = {
        name,
        product:product.id,
        total:amount
    }

    const store = new Store(productToStore)

    Promise.all([
        product.save(),
        store.save()
    ])
    
    res.status(201).json({
        store,
        product
    });
};

const updateProduct = async(req: Request, res: Response) => {
    const {id} = req.params;
    const {name,...rest}:Products = req.body;
    const product = await Product.findByIdAndUpdate(id,{name,rest},{new:true});
    const product_store = await Store.findOne({product:product?._id})
    
    if(product_store){
        await Store.findOneAndUpdate(
            {product:product?._id},
            {total:product_store.total + (rest.amount ? rest.amount : 0),
             name
            },
            {new:true}
        )
    }
    res.json({product,product_store});
};

const deleteProduct = async(req: Request, res: Response) => {
    const {id} = req.params;
    const {amount} = req.body;
    const product = await Product.findById(id);
    const product_store = await Store.findOne({product:product?._id})
    
    if(product_store){
        await Store.findOneAndUpdate(
            {product:product?._id},
            {total:product_store.total - amount},
            {new:true}
        )
    }

    res.json({product});
};

export {
    getProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct
};