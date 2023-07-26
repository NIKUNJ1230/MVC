const express = require("express");
const connection = require("./config/database");
const userroute = require("./routes/user");
require("dotenv").config();
const app = express();

let port = process.env.Port || 8090;
app.use(express.json());

app.use("/user", userroute);

app.listen(port, () => {
  console.log(`listening on ${port}`);
  connection();
});
