import loginUserService from "../services/userLogin.service";

const userLoginController =  (req,res)=>{
    const {email, password} = req.body;
    const userLogin = loginUserService(email, password);
    return res.json(userLogin);
};

export default userLoginController;