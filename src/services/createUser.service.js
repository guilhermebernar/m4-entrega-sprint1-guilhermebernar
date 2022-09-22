import {usersDB as db} from "../database/usersDB";
import {v4 as uuidv4} from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email,name,pwd) => {        
    const hashedPwd = await bcrypt.hash(pwd,10);
    const newUser = {
        email,
        name,
        pwd: hashedPwd,
        id: uuidv4()
    }

    db.push(newUser);
    return newUser;    
};

export default createUserService;