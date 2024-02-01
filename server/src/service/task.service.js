const { createTaskDB, updateTaskDB, getAllTaskDB, deleteTaskDB, getTaskByIdDB } = require('../repository/task.repository');

async function getAllTask(task) {
  return await getAllTaskDB(task);
}
async function getByIdTask(_id, task) {
  return await getTaskByIdDB(_id, task);
}
async function createTask(task) {
  return await createTaskDB(task);
}

async function updateTask(_id, task) {
  return await updateTaskDB(_id, task);
}

async function deleteTask(_id) {
  return await deleteTaskDB(_id);
}

module.exports = { getAllTask, getByIdTask, createTask, updateTask, deleteTask };
