// build your `Project` model here
const db = require('../../data/dbConfig');

function get() {
    return db('projects');
}

function getById(id) {
    return db('projects').where({id}).first();
}

async function add(project) {
    const [id] = await db('projects').add(project);
    return getById(id);
}

module.exports = {
    get,
    getById,
    add
}