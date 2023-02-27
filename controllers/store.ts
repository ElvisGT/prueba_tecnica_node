import { Request, Response } from "express";
import Store from '../models/store';


const getStore = async(req: Request, res: Response) => {
    const store = await Store.find({});
    
    res.json({results:store});
};

const getStoreByID = async(req: Request, res: Response) => {
    const {id} = req.params;
    const store = await Store.findById(id);
    
    res.json(store);
};


const deleteStore = async(req: Request, res: Response) => {
    const {id} = req.params;
    const store = await Store.findByIdAndDelete(id);

    res.json({store});
};

export {
    getStore,
    getStoreByID,
    deleteStore
};