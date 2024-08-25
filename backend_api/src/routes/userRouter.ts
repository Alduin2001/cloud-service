import { Router } from "express";
import UserController from "../controllers/userController";

const userRouter = Router();
userRouter.post('/create',UserController.create);
userRouter.post('/login',UserController.login);
userRouter.get('/read',UserController.read);

export default userRouter;