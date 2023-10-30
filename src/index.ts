import express from "express";
import propertyRouter from "./routes/property";
import userRouter from "./routes/users";

const app = express();

app.use(express.json());

app.use("/api/v1/property", propertyRouter);
app.use("/api/v1/user", userRouter);

app.listen("8080", () => {
  console.log("App is running on http://localhost:8080");
  return;
});
