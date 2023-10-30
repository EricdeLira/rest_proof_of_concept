import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  console.log("Hello World");
  res.status(200).send("Teste");
});

export default userRouter;
