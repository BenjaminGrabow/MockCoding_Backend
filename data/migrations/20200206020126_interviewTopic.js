exports.up = function(knex) {
  return knex.schema.createTable('interview_topic', table => {
    table.increments();
    table.string('interview_topic');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('interview_topic');
};
