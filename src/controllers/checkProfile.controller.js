import checkUserService from "../services/checkProfile.service";

const checkUserController = async (req, res) => {
    const id = req.id;
    const user = await checkUserService(id)

    return res.status(200).json(user);
};

export default checkUserController;
