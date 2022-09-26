import jwt from 'jsonwebtoken';


const verifyAuthToken = (req, res, next) => {
    let header = req.headers.authorization;
    if (header===undefined) {
        return res
        .status(401)
        .json({"message": "Missing authorization token" })
    }
    let token = header.replace("Bearer ","");
    
    jwt.verify(token, 'SECRET_KEY', (error, decoded)=>{
        token.replace("Bearer ","")
        if (error) {
            return res.status(401).json({"message": "Invalid token"});
        } else {
            req.isAdm = decoded.isAdm;
            req.uuid = decoded.uuid;
        }
        next();
    });
};

export default verifyAuthToken;