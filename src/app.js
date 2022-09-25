import express from 'express';
import "dotenv/config" 
import loginRoute from './routes/session.routes';
import userRoute from './routes/users.routes';

const app = express();

app.use(express.json());
app.use("/users", userRoute);
app.use("/login", loginRoute);

const port = 3000;
app.listen(port, () =>{
    console.log(`App listen on port ${port}`)
});

export default app;