const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getBeers
}

// New function to select all beers' names from table beersies, as an array
function getBeers (db = connection) {
  return db('beersies')
    .select()
}
