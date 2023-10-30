import { Router } from "express";
import { auth } from "../middlewares/auth";

const propertyRouter = Router();

propertyRouter.use(auth);

propertyRouter.get("/", (req, res) => {
  console.log("Hello World");
  res.status(200).send("Teste");
});

export default propertyRouter;
