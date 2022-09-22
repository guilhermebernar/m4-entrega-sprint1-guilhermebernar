import {usersDB as db} from "../database/usersDB";
import {v4 as uuidv4} from "uuid"
import * as bcrypt from "bcrypt";

const createUserService = async (email,name,pwd) => {
    const userExists = db.find(
        user => user.id === email 
        && user.name === name);

    if(userExists){
        return json({error:"Email or name has already been used"})
        // Criar verificação no middleware
    }
        
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