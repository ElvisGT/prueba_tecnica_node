import { Request, Response,NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/env.config';
import User from '../models/user';
import { PayloadJWT } from '../type/jwt';

export const validateJWT = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const token = req.header("x-token");

        if(!token){
            return res.status(400).json({
                msg:"No hay token en la peticion"
            })
        }

        const {uid} = jwt.verify(token,SECRET_KEY as string) as PayloadJWT;
        const user = await User.findById({_id:uid})

        if(!user){
            return res.status(400).json({
                msg:"El usuario no existe"
            })
        }

        //@ts-ignore
        req.user = user;
        next();

    }catch(err){
        return res.status(400).json({
            msg:'Token no valido',
        })
    }
}