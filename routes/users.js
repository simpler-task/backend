const router = require("express").Router();

const authenticationController = require("../controller/authentication");

router.post("/login", authenticationController.login);

module.exports = router;
