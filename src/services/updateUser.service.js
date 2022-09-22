import {usersDB as db} from "../database/usersDB";

const updateUserService = (id, name, email, pwd) => {
    const updateUser = {
        id,
        name,
        email,
        pwd
    }
    const userIndex = db.findIndex(element => element.id === id);
    if(userIndex === -1) { return "User not found";}

    db[userIndex] = {...db[userIndex], ...updateUser};
    return db[userIndex];
}

export default updateUserService;