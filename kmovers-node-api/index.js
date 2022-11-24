const express = require("express");
const config = require("./config");
const cors = require("cors");
require('dotenv').config();
const Routes = require("./routes");
const app = express();


app.use
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ limit : '50mb' ,extended: true }));
app.use(cors());


app.use("/api/v1", Routes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
  console.log(`Kmovers-node-api running on port:${PORT}`)
);