import Router from 'express';
import { validateJWT } from '../middlewares/validateJWT';
import { validateAdminRole, isValidRole } from '../middlewares/validate-role';
import {createProduct, 
        getProducts, 
        getProductByID,
        updateProduct,
        deleteProduct,
     } from '../controllers/products';

const router = Router();

router.get('/',[
        validateJWT,
        isValidRole,
        validateAdminRole
],getProducts);

router.get('/:id',[
        validateJWT,
        isValidRole
],getProductByID);

router.post('/',[
        validateJWT,
        isValidRole,
        validateAdminRole
],createProduct);

router.put('/:id',[
        validateJWT,
        isValidRole,
        validateAdminRole
],updateProduct);

router.delete('/:id',[
        validateJWT,
        isValidRole
],deleteProduct);

export default router;