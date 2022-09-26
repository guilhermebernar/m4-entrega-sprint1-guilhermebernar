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
        updatedOn: new Date(),
        uuid: uuidv4()
    }
    const returnData = {email:newUser.email,
        name:newUser.name,
        isAdm:newUser.isAdm,
        createdOn:newUser.createdOn,
        updatedOn:newUser.updatedOn,
        uuid:newUser.uuid}

    db.push(newUser);
    return returnData;
};

export default createUserService;