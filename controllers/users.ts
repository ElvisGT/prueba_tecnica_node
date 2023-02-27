import { Request, Response } from "express";
import User from '../models/user';
import {Users} from '../type/users';


const getUsers = async(req: Request, res: Response) => {
    const users = await User.find({});
    
    res.json({results:users})
};

const getUserByID = async(req: Request, res: Response) => {
    const {id} = req.params;
    const user = await User.findById(id);
    
    res.json(user)
};

const createUser = async(req: Request, res: Response) => {
    const {name,role}:Users = req.body;
    const user = new User({name,role});
    await user.save();

    res.status(201).json(user);
};

const updateUser = async(req: Request, res: Response) => {
    const {id} = req.params;
    const {name,role}:Users = req.body;
    const user = await User.findByIdAndUpdate(id,{name,role},{new:true});

    res.json({user});
};

const deleteUser = async(req: Request, res: Response) => {
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);

    res.json({user});
};

export {
    getUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser
};