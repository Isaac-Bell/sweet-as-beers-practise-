const express = require('express')
const request = require('superagent')

const db = require('../db')

const router = express.Router()

router.get('/beerList', (req, res) => {
  db.getBeers()
    .then(beers => {
      res.json(beers)
    })
    .catch(err => {
      res.status(500).send('DB Error' + err.message)
    })
})

module.exports = router
