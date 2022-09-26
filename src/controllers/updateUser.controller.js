    import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
    const {uuid} = req.params;
    const password = req.body.password;
    const dataToEdit = req.body;
    const updateUser = updateUserService(uuid, password, dataToEdit);

    return res.status(200).json(updateUser);
}

export default updateUserController;