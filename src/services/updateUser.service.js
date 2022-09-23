import {usersDB as db} from "../database/usersDB";
import * as bcrypt from "bcryptjs";

const updateUserService = async (uuid, password, dataToEdit) => {
    const updateUser = dataToEdit;
    const hashedpassword = await bcrypt.hash(password,10);
    const userIndex = db.findIndex(element => element.uuid === uuid);
    if(userIndex === -1) { return "User not found";}

    db[userIndex] = {...db[userIndex], ...updateUser};
    db[userIndex].updatedOn = new Date();
    db[userIndex].password = hashedpassword;
    
    return db[userIndex];
}

export default updateUserService;