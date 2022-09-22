import {usersDB as db} from '../database/usersDB'

const deleteUserService = (id) => {
    const userIndex = db.findIndex((e)=>e.id === id);
    if (userIndex === -1) { return "User not found"; }
    db.splice(userIndex, 1);
    return "User deleted";
};

export default deleteUserService;