// build your server here and require it from index.js
const express = require('express');

const server = express();

const projectsRouter = require('./project/router');
const resourcesRouter = require('./resource/router');
const tasksRouter = require('./task/router');

server.use(express.json());

server.use(projectsRouter);
server.use(resourcesRouter);
server.use(tasksRouter);

module.exports = server;