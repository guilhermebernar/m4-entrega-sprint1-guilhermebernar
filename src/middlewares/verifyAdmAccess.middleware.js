import { usersDB as db } from "../database/usersDB";

const verifyAdmAccess = (req, res, next) => {
    const uuidEndpoint = req.params.uuid;
    const uuid = req.uuid;
    const isAdm = req.isAdm;
    
    if(uuidEndpoint != uuid && isAdm==false) {
        return res.status(401).send({menssage:"Access denied"})
    }

    next();
};

export default verifyAdmAccess;