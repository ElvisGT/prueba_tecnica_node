import {Request,Response} from 'express';
import {compareSync} from 'bcryptjs';
import { Login } from '../type/login';
import User from '../models/user';
import { generateJWT } from '../helpers/generateJWT';

export const login = async(req:Request,res:Response) => {
    try{
        const {name,password}:Login = req.body;
        const user = await User.findOne({name});
        
        if(!user){
            return res.status(401).json({
                msg:"Usuario incorrecto"
            })
        }
        
        const isCorrectPass = compareSync(password as string,user.password)
        
        if(!isCorrectPass){
            return res.status(401).json({
                msg:'Password incorrecto'
            })
        }

        const token = await generateJWT(user.id); 
        
        res.status(200).json({
            token,
            msg:`Bienvenido ${name}`
        });
        
    }catch(err){
        return res.status(500).json({
            msg:`Ha ocurrido el siguiente error: ${err}`
        });
    };

    
};