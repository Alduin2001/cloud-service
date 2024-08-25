import { Router } from "express";
import OrderController from "../controllers/orderController";

const orderRouter = Router();
orderRouter.post('/create',OrderController.create);
orderRouter.get('/myorders',OrderController.getMyOrders);
export default orderRouter;