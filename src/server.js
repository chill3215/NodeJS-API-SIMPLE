import express from 'express';
import userRoutes from './user.routes';
import mainRoutes from "./main.routes";
import helmet from "helmet";

const app = express();
const port = 3000;


//express.json: middleware, allow to read json from the request body
app.use(express.json());
app.use(helmet())
app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

//starts server and listen for the request
app.listen(port, () => {
    console.log(`Hey, go to http://localhost:${port}`);
});