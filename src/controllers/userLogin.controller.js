import loginUserService from "../services/userLogin.service";
import * as bcrypt from 'bcryptjs';
import {usersDB as db} from '../database/usersDB';

const userLoginController =  (req,res)=>{
    const {email, password} = req.body;

    const user = db.find((e)=>e.email === email);
    if (!user){
        return res
        .status(401)
        .json({"message":"Access denied"})};

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
        return res
        .status(401)
        .json({"message":"Access denied"})};
    

    const userLogin = loginUserService(email);
    return res.json(userLogin);
};

export default userLoginController;