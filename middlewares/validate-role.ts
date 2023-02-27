import { NextFunction,Response,Request } from "express";

export const validateAdminRole = (req:Request,res:Response,next:NextFunction) => {
    //@ts-ignore
    const user = req.user;

    if(!user){
        return res.status(500).json({
            msg:'Debe validar el token primero'
        })
    }

    if(user.role !== 'Admin'){
        return res.status(401).json({
            msg:`El usuario ${user.name} no posee el rol de Admin para realizar esa operacion`
        })
    }

    next();
}   


export const isValidRole = (req:Request,res:Response,next:NextFunction) => {
     //@ts-ignore
     const user = req.user;
     const whiteRoles = ['Admin','Client'];

     if(!user){
         return res.status(500).json({
             msg:'Debe validar el token primero'
         })
     }

     if(!whiteRoles.includes(user.role)){
        return res.status(401).json({
            msg:`Rol no permitido, los disponibles son: ${whiteRoles}`
        })
     }

     next();

}