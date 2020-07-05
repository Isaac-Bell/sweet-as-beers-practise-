const express = require('express')
const request = require('superagent')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getBeers()
    .then(beers => {
      res.json(beers)
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const beer = req.body
  db.addBeer(beer)
    .then(newBeers => {
      console.log(newBeers)
      res.json(newBeers)
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

module.exports = router
