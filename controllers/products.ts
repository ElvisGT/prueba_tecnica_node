import { Request, Response } from "express";
import Product from '../models/product';
import {Products} from '../type/products';


const getProducts = async(req: Request, res: Response) => {
    const products = await Product.find({});
    
    res.json({results:products});
};

const getProductByID = async(req: Request, res: Response) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    
    res.json(product);
};

const createProduct = async(req: Request, res: Response) => {
    const {name,price}:Products = req.body;
    const product = new Product({name,price});
    await product.save();

    res.status(201).json(product);
};

const updateProduct = async(req: Request, res: Response) => {
    const {id} = req.params;
    const {name,price}:Products = req.body;
    const product = await Product.findByIdAndUpdate(id,{name,price},{new:true});

    res.json({product});
};

const deleteProduct = async(req: Request, res: Response) => {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);

    res.json({product});
};

export {
    getProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct
};