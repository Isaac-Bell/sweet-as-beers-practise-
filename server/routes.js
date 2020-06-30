const express = require('express')

const router = express.Router()

const beers = require('./beers')

router.use(express.json())

// define routes in here



module.exports = router
