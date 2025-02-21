import express, { Router } from "express";
import AuthController from "../controllers/AuthController.ts"

const router: Router = express.Router();

router
    .post('/register', AuthController.register)
    .post('/login', AuthController.login)

export default router