import {usersDB as db} from '../database/usersDB'

const deleteUserService = (uuid) => {
    const userIndex = db.findIndex((e)=>e.uuid === uuid);
    if (userIndex === -1) { return "User not found"; }
    db.splice(userIndex, 1);
    return "User deleted";
};

export default deleteUserService;