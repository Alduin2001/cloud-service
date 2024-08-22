import { Router } from "express";
import userRouter from "./userRouter";
import tarifRoutes from "./tarifRoutes";
const router = Router();

router.use('/users/',userRouter);
router.use('/tarif/',tarifRoutes);

export default router;