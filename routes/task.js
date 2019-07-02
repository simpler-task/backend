const routes = require("express").Router();
const controller = require("../controller/task");
const authorizationController = require("../controller/authorization");

routes.get("/", authorizationController, controller.getAllTask);
routes.post("/", controller.createTask);
routes.delete("/:id", controller.deleteTask);
routes.put("/:id", controller.updateTask);

module.exports = routes;
