import { Router } from "express";

const propertyRouter = Router();

propertyRouter.get("/", (req, res) => {
  console.log("Hello World");
  res.status(200).send("Teste");
});

export default propertyRouter;
