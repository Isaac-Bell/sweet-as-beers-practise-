const express = require('express')

const router = express.Router()

const beers = require('./beers')

router.use(express.json())

// define routes in here

router.get('/', (req, res) => {
  console.log(beers)
  res.json(beers)
})

module.exports = router
