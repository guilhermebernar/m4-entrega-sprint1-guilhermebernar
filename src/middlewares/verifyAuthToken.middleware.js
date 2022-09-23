import jwt from 'jsonwebtoken';
import checkUserController from '../controllers/checkProfile.controller';


const verifyAuthToken = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({menssage: "Missing authorization token" });
    };
    
    jwt.verify(token, 'SECRET_KEY', (error, decoded)=>{
        if (error) {
            return res.status(401).send({menssage: "Invalid token"});
        } else {
            req.isAdm = decoded.isAdm;
            req.uuid = decoded.uuid;
        }
        next();
    });
};

export default verifyAuthToken;