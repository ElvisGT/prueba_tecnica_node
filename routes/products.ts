import Router from 'express';
import {createProduct, 
        getProducts, 
        getProductByID,
        updateProduct,
        deleteProduct,
     } from '../controllers/products';

const router = Router();

router.get('/',getProducts);

router.get('/:id',getProductByID);

router.post('/',createProduct);

router.put('/:id',updateProduct);

router.delete('/:id',deleteProduct);

export default router;