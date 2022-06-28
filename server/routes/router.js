const express = require("express");
const services = require("../services/render");
const route = express.Router();
const controller = require("../controller/controller");

//render
route.get("/", services.homeRoute);
route.get("/add-user", services.add_user);
route.get("/update-user/:id", services.update_user);

//api
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.get("/api/user/:id", controller.findbyidone);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
