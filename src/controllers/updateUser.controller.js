    import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
    const {id} = req.params;
    const password = req.body.password;
    const dataToEdit = req.body;
    const updateUser = updateUserService(id, password, dataToEdit);

    return res.status(200).json(updateUser);
}

export default updateUserController;