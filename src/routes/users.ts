import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/users";

const userRouter = Router();

userRouter.get("/", getUser);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser);
userRouter.patch("/:id", updateUser);

export default userRouter;
