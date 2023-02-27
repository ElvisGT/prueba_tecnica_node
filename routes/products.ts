import Router from 'express';
import {check} from 'express-validator';
import { validateJWT } from '../middlewares/validateJWT';
import { validateAdminRole, isValidRole } from '../middlewares/validate-role';
import { validateAll } from '../middlewares/validate-all';
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
        isValidRole,
        check('id','No es un id valido de Mongo').isMongoId(),
        validateAll
],getProductByID);

router.post('/',[
        validateJWT,
        isValidRole,
        validateAdminRole
],createProduct);

router.put('/:id',[
        validateJWT,
        isValidRole,
        validateAdminRole,
        check('id','No es un id valido de Mongo').isMongoId(),
        validateAll
],updateProduct);

router.delete('/:id',[
        validateJWT,
        isValidRole,
        check('id','No es un id valido de Mongo').isMongoId(),
        validateAll
],deleteProduct);

export default router;