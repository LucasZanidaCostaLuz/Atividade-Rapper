import express from "express";
import { config } from "dotenv";

import routes from "./routes/index.routes.js";

config();

const serverPort = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(routes)

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello, World!" });
});

app.listen(serverPort, () => {
  console.log(`👻 Server started on http://localhost:${serverPort}`);
});