    import updateUserService from "../services/updateUser.service";

const updateUserController = async (req, res) => {
    const uuid = req.uuid;
    const dataToEdit = req.body;
    const updateUser = await updateUserService(uuid, dataToEdit);

    return await res.status(200).json(updateUser);
}

export default updateUserController;