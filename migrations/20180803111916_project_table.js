
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('id').unique('id');
        tbl
            .string('name');
        tbl 
            .string('description')
            .defaultTo('Not Provided');
        tbl
            .boolean('project_completed')
            .defaultTo(false);

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  
};
