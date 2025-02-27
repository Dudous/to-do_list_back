import express, { Router } from "express";
import AuthController from "../controllers/AuthController.ts"
import { validateRegister, validateLogin, authMiddleware } from "../middlewares/authMiddleware.ts";

const router: Router = express.Router();

router
    .post('/register', validateRegister, AuthController.register)
    .post('/login', validateLogin, AuthController.login)

export default router