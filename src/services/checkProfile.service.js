import {usersDB as db} from '../database/usersDB'

const checkUserService = (uuid) => {
    const userIndex = db.findIndex((e)=>e.uuid === uuid);
    if (userIndex === -1) { return "User not found"; }
    else {
        let profileData = db.at(userIndex);
        return {email:profileData.email,
            name:profileData.name,
            isAdm:profileData.isAdm,
            createdOn:profileData.createdOn,
            updatedOn:profileData.updatedOn,
            uuid:profileData.uuid}
    }
};

export default checkUserService;