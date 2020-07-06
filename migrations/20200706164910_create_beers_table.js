exports.up = function (knex) {
  return knex.schema.createTable('beers', function (table) {
    table.increments('id')
    table.string('name')
    table.string('brewery')
    table.string('country')
    table.string('style')
    table.string('abv')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('beers')
}
