const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./server/database/connection");
dotenv.config({ path: "config.env" });
const bodyParser = require("body-parser");

//mongo db connection
connectDB();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;


//set view engine (folder for views)
app.set("view engine", "ejs");
//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));


app.use("/", require("./server/routes/router"));
app.listen(PORT, () => {
  console.log(`app is listening.`);
});
