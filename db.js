#!/usr/bin/env node
const knex = require('knex')
const config = require('./knexfile').development
db = knex(config)

module.exports = {
  getBeers
}

// New function to select all beers from table beersies, as an array
function getBeers () {
  return db('beersies')
    .select()
}
