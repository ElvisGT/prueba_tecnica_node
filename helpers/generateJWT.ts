import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import { SECRET_KEY } from '../config/env.config';

export const generateJWT = (uid:ObjectId) => {
    return new Promise((resolve,reject) => {
        const payload = {uid};

        jwt.sign(payload,
                SECRET_KEY as string,
                (err,token) => {
                    if(err){
                        reject('Ha ocurrido un error para generar el token');
                    }

                    resolve(token);
                }
        );
    });
};