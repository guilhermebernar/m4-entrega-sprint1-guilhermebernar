import {usersDB as db} from "../database/usersDB";
import * as bcrypt from "bcryptjs";

const updateUserService = async (uuid, dataToEdit) => {
    const searchId = uuid;
    const updateUser = dataToEdit;
    const hashedpassword = ""

    if(dataToEdit.password){
        hashedpassword = await bcrypt.hash(dataToEdit.password,10);
    }

    const userIndex = db.findIndex(e=> e.uuid === searchId);
    if(userIndex === -1) { return "User not found"}

    db[userIndex] = {...db[userIndex], ...updateUser};    
    db[userIndex].updatedOn = new Date();
    db[userIndex].password = hashedpassword;
    
    const data = await db[userIndex];
    return {
        uuid:data.uuid,
        createdOn:data.createdOn,
        updatedOn:data.updatedOn,
        name:data.name,
        email:data.email,
        isAdm:data.isAdm,
    } 
}

export default updateUserService;