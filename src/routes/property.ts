import { Router } from "express";
import { auth } from "../middlewares/auth";
import {
  createProperty,
  deleteProperty,
  getProperty,
  updateProperty,
} from "../controllers/property";

const propertyRouter = Router();

propertyRouter.use(auth);

propertyRouter.get("/", getProperty);
propertyRouter.post("/", createProperty);
propertyRouter.delete("/:id", deleteProperty);
propertyRouter.patch("/:id", updateProperty);

export default propertyRouter;
