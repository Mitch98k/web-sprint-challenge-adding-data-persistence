// build your `Project` model here
const db = require('../../data/dbConfig');

function get() {
    return db('projects');
}

function getById(project_id) {
    return db('projects').where({project_id}).first();
}

async function add(project) {
    const [project_id] = await db('projects').insert(project);
    return getById(project_id);
}

module.exports = {
    get,
    getById,
    add
}