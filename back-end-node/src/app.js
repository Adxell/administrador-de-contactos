import express from "express";
import cors from "cors"
import contactRoutes from "./routers/contact.routes.js";

const app = express();

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hi this is the backend");
});
app.use("/api/conctact", contactRoutes);

app.get("*", (req, res) => {
  res.status(404).json({ message: "404!" });
});

export default app;
