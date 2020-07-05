exports.up = knex => {
  return knex.schema.createTable('Beers', function (table) {
    table.increments().primary()
    table.string('name')
    table.string('brewery')
    table.string('country')
    table.string('style')
    table.string('abv')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('Beers')
}
