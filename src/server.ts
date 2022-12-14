import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';


const bodyParser = require('body-parser');

dotenv.config();

const server = express();

server.use(express.urlencoded({extended: true}));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT);