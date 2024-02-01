const express = require('express');
const { buildResponse } = require('../helper/respons');
const { createTask, updateTask, deleteTask, getByIdTask, getAllTask } = require('../service/task.service');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        buildResponse(res, 200, await getAllTask());
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});
route.get('/:_id', async (req, res) => {
    try {
        buildResponse(res, 200, await getByIdTask(req.params._id));
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const task = req.body;
        buildResponse(res, 200, await createTask(task));
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.put('/:_id', async (req, res) => {
    try {
        const task = req.body;
        buildResponse(res, 200, await updateTask(req.params._id, task));
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.delete('/:_id', async (req, res) => {
    try {
        buildResponse(res, 200, await deleteTask(req.params._id));
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

module.exports = route;
