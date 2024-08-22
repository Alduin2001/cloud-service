import { Router } from "express";
import TarifController from "../controllers/tarifController";
const tarifRoutes = Router();
tarifRoutes.post('/create',TarifController.create);
tarifRoutes.get('/read',TarifController.read);

export default tarifRoutes;
