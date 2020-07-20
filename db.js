const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBeers,
  addYaBeer
}

function getBeers (db = connection) {
  return db('beers').select()
}

function addYaBeer (beer, db = connection) {
  return db('beers')
    .insert({
      id: Math.floor(Math.random() * 30),
      name: beer,
      brewery: 'jonty',
      country: 'jonty',
      style: 'jonty',
      abv: 'jonty'
    })
}
