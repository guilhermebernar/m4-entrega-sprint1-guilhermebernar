import express from 'express';
import userRoute from './routes/users.routes';

const app = express();
app.use(express.json());

app.use("/users", userRoute);

const port = 3000;
app.listen(port, () =>{
    console.log(`App listen on port ${port}`)
});