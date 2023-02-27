import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import dontenv from 'dotenv';
dontenv.config();
import { PORT } from '../config/env.config';
import {productsRoutes,
        storeRoutes,
        usersRoutes} from '../routes'
import db_conection from '../config/database';


export default class Server {
    private static _instance:Server;
    private port:number;
    private app:express.Application;
    private routesPath = {
        store:'/api/v1/store',
        users:'/api/v1/users',
        products:'/api/v1/products'
    };
    
    constructor(){
        this.port = PORT as number;
        this.app = express();

        //middlewares
        this.middlewares();

        //routes
        this.routes();

        //connect DB
        this.database();
    };

    public static get instance(){
        return this._instance || (this._instance = new Server);
    };

    middlewares(){
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(express.json())
    };

    routes(){
        this.app.use(this.routesPath.products,productsRoutes);
        this.app.use(this.routesPath.store,storeRoutes);
        this.app.use(this.routesPath.users,usersRoutes);
    };

    async database() {
        await db_conection;
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log(`Server corriendo en el puerto: ${this.port}`);
        });
    };
};