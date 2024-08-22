import express, { Express } from 'express';
import router from './routes';
import dotenv from 'dotenv';
import connectionDB from './config/connection';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();
const dbUri = process.env.DB ?? 'mongodb://localhost:27017/test';
connectionDB(dbUri);
const app: Express = express();
const PORT: number = parseInt(process.env.PORT || '3005', 10);

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);

app.listen(PORT, (err?: Error) => {
    if (err) {
        console.error(`Error starting server: ${err.message}`);
    } else {
        console.log(`Server started at http://localhost:${PORT}`);
    }
});