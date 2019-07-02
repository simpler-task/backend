const routes = require("express").Router();
const controller = require("../controller/task");
const authorizationController = require("../controller/authorization");

routes.get("/", authorizationController, controller.getAllTask);
routes.post("/", authorizationController, controller.createTask);
routes.delete("/:id", authorizationController, controller.deleteTask);
routes.put("/:id", authorizationController, controller.updateTask);

module.exports = routes;
