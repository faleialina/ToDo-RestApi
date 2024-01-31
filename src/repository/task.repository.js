const { Table, ObjectId } = require('../db');

async function getAllTaskDB() {
  const data = await Table.find();
  return data;
}

async function getTaskByIdDB(_id) {
  const data = await Table.find({ _id: new ObjectId(_id) });
  return data;
}

async function createTaskDB(task) {
  await Table.create(task);
  const data = await Table.find();
  return data;
}

async function updateTaskDB(_id, task) {
  await Table.updateOne({ _id: new ObjectId(_id) }, { $set: task });
  const data = await Table.find({ _id: new ObjectId(_id) });
  return data;
}

async function deleteTaskDB(_id) {
  await Table.deleteOne({ _id: new ObjectId(_id) });
  const data = await Table.find();
  return data;
}

module.exports = { getAllTaskDB, getTaskByIdDB, createTaskDB, updateTaskDB, deleteTaskDB };
