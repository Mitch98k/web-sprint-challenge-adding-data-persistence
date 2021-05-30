// build your `/api/tasks` router here
const express = require('express');

const Tasks = require('./model');

const router = express.Router();

router.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await Tasks.get();
        res.status(200).json(tasks);
    } catch(err) {
        res.status(500).json({ message: "The tasks could not be retrieved" });
    }
});

router.post('/api/tasks', async (req, res) => {
    const task = req.body;
    try {
        const newTask = await Tasks.add(task);
        res.status(201).json(newTask);
    } catch(err) {
        res.status(500).json({ message: "The task could not be created", error: err.message });
    }
});

module.exports = router;
