const model = require("../models/task");

const getAllTask = async (req, res) => {
  const isManager = req.decoded.isManager || false;

  if (isManager) {
    const taskList = await model.find().exec();

    res.send({
      data: taskList
    });
  } else {
    const taskList = await model
      .find({
        owner: req.decoded.id
      })
      .exec();

    res.send({
      data: taskList
    });
  }
};

const createTask = async (req, res) => {
  const { name, description, isDone } = req.body;

  const newTask = await new model({
    name,
    description,
    isDone,
    owner: req.decoded.id
  }).save();

  res.send(newTask);
};

const deleteTask = async (req, res) => {
  const id = req.params.id;

  const task = await model.deleteOne({
    _id: id
  });

  res.send(task);
};

const updateTask = async (req, res) => {
  const id = req.params.id;

  const { name, description } = req.body;

  const task = await model
    .updateOne(
      {
        _id: id
      },
      {
        name,
        description
      }
    )
    .exec();

  res.send(task);
};

// const getAllTask = async (req, res) => {
//   const taskList = await model.find().exec();

//   res.send(taskList);
// };

// const createTask = async (req, res) => {
//   const { name, description, isDone } = req.body;

//   const newTask = await new model({
//     name,
//     description,
//     isDone,
//     owner: "5d0c939983852c5756e4c54d"
//   }).save();

//   res.send(newTask);
// };

// const deleteTask = async (req, res) => {
//   const id = req.query.id;

//   const task = await model.deleteOne({
//     id
//   });

//   res.send(task);
// };

// const updateTask = async (req, res) => {
//   const id = req.query.id;
//   const { name, description, isDone } = req.body;

//   const task = await model
//     .updateOne(
//       {
//         id
//       },
//       {
//         name,
//         description,
//         isDone
//       }
//     )
//     .exec();

//   res.send(task);
// };

module.exports = {
  getAllTask,
  createTask,
  deleteTask,
  updateTask
};
