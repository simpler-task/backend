const routes = require("express").Router();
const controller = require("../controller/task");

routes.get("/", controller.getAllTask);
routes.post("/", controller.createTask);
routes.delete("/:id", controller.deleteTask);
routes.put("/:id", controller.updateTask);

module.exports = routes;
