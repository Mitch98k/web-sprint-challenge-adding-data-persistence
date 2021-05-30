// build your `Resource` model here
const db = require('../../data/dbConfig');

function get() {
    return db('resources');
}

function getById(resource_id) {
    return db('resources').where({resource_id}).first();
}
async function add(resource) {
    const [resource_id] = await db('resources').insert(resource);
    return getById(resource_id);
}

module.exports = {
    get,
    getById,
    add
}