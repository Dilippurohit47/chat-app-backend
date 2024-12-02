import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import ChatGroupController from "../controllers/GroupControllers.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const router = Router();

router.post("/auth/login", AuthController.login);

router.post("/chat-group", authMiddleware, ChatGroupController.store);

export default router;
