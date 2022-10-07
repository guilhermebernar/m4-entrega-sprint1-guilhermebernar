import createUserService from "../services/createUser.service";

const createUserController = async (req, res) => {
    const {email, name, password, isAdm} = req.body;

    try{
        const user = await createUserService(email, name, password, isAdm);
        return res.status(201).json(user);

    }catch(err){
        return res.status(400).json(err.message);
    }
}

export default createUserController;