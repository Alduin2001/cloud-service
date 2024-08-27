import { Router } from "express";
import TarifController from "../controllers/tarifController";
const tarifRoutes = Router();
tarifRoutes.post('/create',TarifController.create);
tarifRoutes.get('/read',TarifController.read);
tarifRoutes.put('/update/:id',TarifController.update);
tarifRoutes.delete('/delete/:id',TarifController.delete);
export default tarifRoutes;
