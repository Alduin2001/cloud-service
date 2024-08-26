import { Router } from "express";
import OrderController from "../controllers/orderController";

const orderRouter = Router();
orderRouter.post('/create',OrderController.create);
orderRouter.get('/myorders',OrderController.getMyOrders);
orderRouter.delete('/delete/:id',OrderController.delete);
export default orderRouter;