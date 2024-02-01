const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo_restapi');

const Table = mongoose.model('tasks', {
    taitle: String,
    description: String,
});

const ObjectId = mongoose.Types.ObjectId;

module.exports = { Table, ObjectId };
