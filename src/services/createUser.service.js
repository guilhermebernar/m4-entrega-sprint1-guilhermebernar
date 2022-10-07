import database from "../database/usersDB";
import * as bcrypt from "bcryptjs";

const createUserService = async (email,name,password,isAdm) => {        
    const hashedPassword = await bcrypt.hash(password,10); 
    const createdOn = new Date().toJSON();

    try{
        const res = await database.query(
            "INSERT INTO users(email,name,password,createdOn,isAdm) VALUES($1,$2,$3,$4,$5) RETURNING *",
            [email,name,hashedPassword,createdOn,isAdm]
        );
        return res.rows[0]
    } catch(err){
        throw new Error(err);
    };
};

export default createUserService;