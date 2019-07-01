require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/users", routes.users);
app.use("/tasks", routes.task);

app.listen(process.env.PORT || 8080);
