import { Router } from "express";
import { ctrlCreateUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/api/users',ctrlCreateUser)

export {userRouter}