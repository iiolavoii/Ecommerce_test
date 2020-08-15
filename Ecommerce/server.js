//PACOTES

const compression = require("compression");
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

//START

const app = express();

//AMBIENTE

const isProduction = precess.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3000;

//AQUIVOS ESTATICOS

app.use("/public", express.static(__dirname + "/public"));
app.use("/public/images", express.static(__dirname + "/public/images"));

//SETUP MONGODB

const dbs = require("/config/database");
