import { Router } from "express";
import userRouter from "./userRouter";
import tarifRoutes from "./tarifRoutes";
import orderRouter from "./orderRoutes";
import cloudRoutes from "./cloudRoutes";
const router = Router();

router.use('/users/',userRouter);
router.use('/tarif/',tarifRoutes);
router.use('/orders/',orderRouter);
router.use('/clouds/',cloudRoutes);

export default router;