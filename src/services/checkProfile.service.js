import {usersDB as db} from '../database/usersDB'

const checkUserService = (id) => {
    console.log(id)
    const userIndex = db.findIndex((e)=>e.uuid === id);
    if (userIndex === -1) { return "User not found"; }
    else {
        return db.at(userIndex);
    }
};

export default checkUserService;