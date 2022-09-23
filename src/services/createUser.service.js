import {usersDB as db} from "../database/usersDB";
import {v4 as uuidv4} from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email,name,password,isAdm,createdOn,updatedOn) => {        
    const hashedpassword = await bcrypt.hash(password,10);
    const newUser = {
        email,
        name,
        password: hashedpassword,
        isAdm,
        createdOn: new Date(),
        updatedOn,
        id: uuidv4()
    }

    db.push(newUser);
    return newUser;    
};

export default createUserService;