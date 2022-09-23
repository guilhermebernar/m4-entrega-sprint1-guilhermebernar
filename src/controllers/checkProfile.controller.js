import checkUserService from "../services/checkProfile.service";

const checkUserController = async (req, res) => {
    const uuid  = req.uuid;
    const user = await checkUserService(uuid)

    return res.status(200).json(user);
};

export default checkUserController;
