const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const api = require("./backend/routes");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.get("/test", (req, res) => {
  res.send("funciona!");
});

app.use("/api", api);

const PORT = process.env.PORT;
app.listen(PORT);
