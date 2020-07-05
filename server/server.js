const path = require('path')
const express = require('express')

const server = express()

const beers = require('./routes/beers')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/beers', beers)

module.exports = server
