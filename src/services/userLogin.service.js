import {usersDB as db} from '../database/usersDB';
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

const loginUserService = (email, pwd) => {
    const user = db.find((e)=>e.email === email);
    if (!user){
        return "Algo errado aconteceu, tente novamente.";
    }

    const pwdMatch = bcrypt.compareSync(pwd, user.pwd);
    if (!pwdMatch) {
        return "Algo errado aconteceu, tente novamente.";
    };
    const token = jwt.sign({email: email}, "SECRET_KEY", {expiresIn: "24h"});

    return token;
}

export default loginUserService;