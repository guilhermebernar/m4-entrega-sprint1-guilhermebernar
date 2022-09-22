import loginUserService from "../services/userLogin.service";

const userLoginController =  (req,res)=>{
    const {email, pwd} = req.body;
    const userLogin = loginUserService(email, pwd);
    return res.json(userLogin);
};

export default userLoginController;