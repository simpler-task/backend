const jwt = require("jsonwebtoken");
const users = require("../models/users");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await users
    .findOne({
      username
    })
    .exec();

  if (user) {
    const compare = await bcrypt.compareSync(password, user.password);
    if (compare) {
      const token = jwt.sign(
        {
          id: user._id,
          isManager: user.isManager
        },
        process.env.JWT_SECRET
      );

      return res.send({
        token
      });
    }

    return res.status(401).send({
      message: "Unathorized"
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
