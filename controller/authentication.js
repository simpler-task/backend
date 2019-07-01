const jwt = require("jsonwebtoken");
const users = require("../models/users");

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await users
    .findOne({
      username
    })
    .exec();

  if (user) {
    const token = jwt.sign(
      {
        id: result._id,
        isManager: result.isManager
      },
      "xcidic"
    );

    res.send({
      token
    });
  } else {
    res.status(401).send({
      message: "Unauthorized"
    });
  }
};

module.exports = {
  login
};
