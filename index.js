// const path = require("path");
// const express = require("express");
// require("dotenv").config();
// const app = express();
// const cors = require("cors");
// const port = process.env.PORT || 3000;
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./src/routes/route.js";
import { connect } from "./src/database/conn.js";

const app = express();
// app middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

//Application port
const port = process.env.PORT || 8080;
// Page Home
// app.get("/", (req, res) => {
//   res.send("SERVER ON");
// });

// ZingMp3Router
// const ZingMp3Router = require("./src/routes/ZingRouter");
app.use("/api", router);
app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});
// app.listen(port, () => {
//   console.log(`Start server listen at http://localhost:${port}`);
// });
//start server only valid connection
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("DB INVALID");
  });
