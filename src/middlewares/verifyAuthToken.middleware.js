import jwt from 'jsonwebtoken';


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
            req.id = decoded.id;
        }
        next();
    });
};

export default verifyAuthToken;