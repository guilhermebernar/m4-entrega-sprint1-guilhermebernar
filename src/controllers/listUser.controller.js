import listUserService from "../services/listUser.service";

const listUserController =  (req, res) => {
    const isAdm = req.isAdm
    const users = listUserService();
    if(isAdm){
        return res.status(200).json(users);
    } else {
        res.status(401).send({message: "Missing authorization headers"})
    }
}

export default listUserController;