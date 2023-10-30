import express from "express";
import propertyRouter from "./routes/property";
import userRouter from "./routes/users";

const app = express();

app.use(express.json());

app.use("/v1/property", propertyRouter);
app.use("/v1/users", userRouter);

app.listen("8080", () => {
  console.log("App is running on http://localhost:8080");
});
