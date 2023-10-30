import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello World");
  res.status(200).send("Teste");
});

app.listen("8080", () => {
  console.log("App is running on http://localhost:8080");
});
