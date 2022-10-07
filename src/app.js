import express from 'express';
import "dotenv/config" 
import loginRoute from './routes/session.routes';
import userRoute from './routes/users.routes';
import { startDatabase } from './database/usersDB';

const app = express();

app.use(express.json());
app.use("/users", userRoute);
app.use("/login", loginRoute);

const appPort = 3000;
const userDbPort = 5432;

app.listen(appPort, () =>{
    console.log(`App listen on port ${appPort}`)
    startDatabase()
    console.log(`App listen on port ${userDbPort}`)
});

export default app;