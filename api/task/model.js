// build your `Task` model here
const db = require('../../data/dbConfig');

function get() {
    return db('tasks');
}

function getById(id) {
    return db('tasks').where({id}).first();
}

async function add(task) {
    const [id] = await db('tasks').insert(task);
    return getById(id);
}

module.exports = {
    get, 
    getById,
    add
}