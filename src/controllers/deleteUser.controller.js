import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
    const {uuid}  = req.params;
    const deleteUser = deleteUserService(uuid);

    return res.status(200).json(deleteUser);
};

export default deleteUserController;
