import { usersDB as db } from "../database/usersDB";

const verifyEmailAvailability = (req, res, next) => {
    const{email} = req.body;
    const userAlreadyExists = db.find((user)=>user.email === email);
    if (userAlreadyExists) {
        return res
                .status(400)
                .json({mensage:"This e-mail is already in use."})};
    
    next();
};

export default verifyEmailAvailability;