const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  let token = req.headers.token;
  // if (token) {
  // } else {
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.decoded = decoded;
    next();
  } catch (e) {
    res.status(401).send({
      message: "Unauthorized"
    });
  }
  // }
};

module.exports = authorization;
