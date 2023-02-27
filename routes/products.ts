import Router from 'express';
import { validateJWT } from '../middlewares/validateJWT';
import {createProduct, 
        getProducts, 
        getProductByID,
        updateProduct,
        deleteProduct,
     } from '../controllers/products';

const router = Router();

router.get('/',[
        validateJWT
],getProducts);

router.get('/:id',getProductByID);

router.post('/',createProduct);

router.put('/:id',updateProduct);

router.delete('/:id',deleteProduct);

export default router;