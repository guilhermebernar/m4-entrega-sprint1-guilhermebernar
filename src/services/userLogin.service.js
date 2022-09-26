import jwt from 'jsonwebtoken';
import {usersDB as db} from '../database/usersDB';

const loginUserService = (email) => {
    const user = db.find((e)=>e.email === email)
    const token = jwt.sign({
        email: email, 
        isAdm:user.isAdm, 
        uuid:user.uuid}, 
        "SECRET_KEY", 
        {expiresIn: "24h"});

    return {"token": token};
}

export default loginUserService;