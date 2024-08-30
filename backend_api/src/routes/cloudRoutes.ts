import { Router } from "express";
import CloudController from "../controllers/cloudController";

const cloudRoutes = Router();

cloudRoutes.post('/create',CloudController.create);

export default cloudRoutes;