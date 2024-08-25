import { Router } from "express";
import userRouter from "./userRouter";
import tarifRoutes from "./tarifRoutes";
import orderRouter from "./orderRoutes";
const router = Router();

router.use('/users/',userRouter);
router.use('/tarif/',tarifRoutes);
router.use('/orders/',orderRouter);

export default router;