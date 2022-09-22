import createUserService from "../services/createUser.service";

const createUserController = async (req, res) => {
    const {email, name, pwd} = req.body;
    const user = await createUserService(email, name, pwd);
    return res.status(201).json(user);
}

export default createUserController;