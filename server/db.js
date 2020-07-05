const config = require('../knexfile').development
const db = require('knex')(config)

module.exports = {
  getBeers,
}

function getBeers() {
  return db('Beers').select()
}
