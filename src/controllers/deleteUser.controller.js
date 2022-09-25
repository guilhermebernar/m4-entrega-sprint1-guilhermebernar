import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
    const {id}  = req.params;
    const deleteUser = deleteUserService(id);

    return res.status(200).json(deleteUser);
};

export default deleteUserController;
