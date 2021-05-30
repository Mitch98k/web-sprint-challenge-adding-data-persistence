// build your `/api/projects` router here
const express = require('express');

const Projects = require('./model');

const router = express.Router();

router.get('/api/projects', async (req, res) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch(err) {
        res.status(500).json({ message: "The projects could not be retrieved" });
    }
});

router.post('/api/projects', async (req, res) => {
    const project = req.body;
    try {
        const newProject = await Projects.add(project);
        res.status(201).json(newProject);
    } catch(err) {
        res.status(500).json({ message: "The project could not be created", error: err.message });
    }
});

module.exports = router;