import { Request, Response } from "express";

const getUsers = (req: Request, res: Response) => {

    res.json({
        msg: "Anda"
    });
};

const getUserByID = (req: Request, res: Response) => {

    res.json({
        msg: "Anda"
    });
};

const createUser = (req: Request, res: Response) => {

    res.json({
        msg: "Anda"
    });
};

const updateUser = (req: Request, res: Response) => {

    res.json({
        msg: "Anda"
    });
};

const deleteUser = (req: Request, res: Response) => {

    res.json({
        msg: "Anda"
    });
};

export {
    getUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser
};