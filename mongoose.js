const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/xcidic", { useNewUrlParser: true });

module.exports = mongoose;
