const mongoose = require("../mongoose");

const Task = mongoose.model(
  "Task",
  mongoose.Schema(
    {
      name: String,
      description: String,
      owner: mongoose.Types.ObjectId,
      isDone: Boolean
    },
    {
      timestamps: true
    }
  )
);

module.exports = Task;
