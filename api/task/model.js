// build your `Task` model here
const db = require('../../data/dbConfig');

function get() {
    return db('tasks');
}

function getById(task_id) {
    return db('tasks').where({task_id}).first();
}

async function add(task) {
    const [task_id] = await db('tasks').insert(task);
    return getById(task_id);
}

module.exports = {
    get, 
    getById,
    add
}