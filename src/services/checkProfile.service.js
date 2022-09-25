import {usersDB as db} from '../database/usersDB'

const checkUserService = (id) => {
    const userIndex = db.findIndex((e)=>e.id === id);
    if (userIndex === -1) { return "User not found"; }
    else {
        return db.at(userIndex);
    }
};

export default checkUserService;