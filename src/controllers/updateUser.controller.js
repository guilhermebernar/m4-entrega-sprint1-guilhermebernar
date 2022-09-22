import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
    const {id} = req.params;
    const {name, email, pwd} = req.body;
    const updateUser = updateUserService(id, name, email, pwd);

    return res.status(200).json(updateUser);
}

export default updateUserController;