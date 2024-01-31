const express = require('express');
const { createTask, updateTask, deleteTask, getByIdTask, getAllTask } = require('../service/task.service');
const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await getAllTask();
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});
route.get('/:_id', async (req, res) => {
  try {
    const data = await getByIdTask(req.params._id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

route.post('/', async (req, res) => {
  try {
    const task = req.body;
    res.send(await createTask(task));
  } catch (error) {
    res.send(error.message);
  }
});

route.put('/:_id', async (req, res) => {
  try {
    const task = req.body;
    res.send(await updateTask(req.params._id, task));
  } catch (error) {
    res.send(error.message);
  }
});

route.delete('/:_id', async (req, res) => {
  try {
    res.send(await deleteTask(req.params._id));
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = route;
