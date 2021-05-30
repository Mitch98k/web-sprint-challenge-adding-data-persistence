
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.string('project_name').notNullable();
        tbl.string('project_description');
        tbl.boolean('project_completed').defaultTo(false);
        tbl.integer('PR_id')
            .unsigned()
            .references('project_resources.PR_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id');
        tbl.string('resource_name').notNullable().unique();
        tbl.string('resource_description');
    })
    .createTable('project_resources', tbl => {
        tbl.increments('PR_id');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resources.resource_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.string('task_description').notNullable();
        tbl.string('task_notes');
        tbl.boolean('task_completed').defaultTo(false);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects.project_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
