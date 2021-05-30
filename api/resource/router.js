// build your `/api/resources` router here
const express = require('express');

const Resources = require('./model');

const router = express.Router();

router.get('/api/resources', async (req, res) => {
    try {
        const resources = await Resources.get();
        res.status(200).json(resources);
    } catch(err) {
        res.status(500).json({ message: "The resources could not be retrieved" });
    }
});

router.post('/api/resources', async (req, res) => {
    const resource = req.body;
    try {
        const newResource = await Resources.add(resource);
        res.status(201).json(newResource);
    } catch(err) {
        res.status(500).json({ message: "The resource could not be created" });
    }
});

module.exports = router;