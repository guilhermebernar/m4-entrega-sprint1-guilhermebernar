import { request } from "express";
import listUserService from "../services/listUser.service";

const listUserController =  (req, res) => {
    const isAdm = req.isAdm
    const users = listUserService();
    if(isAdm===true){
        return res.status(200).json(users);
    } else {
        res.status(401).send({message: "Missing authorization headers"})
    }
}

export default listUserController;