const path = require('path')
const express = require('express')

const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// Define a route with express with the root path /find which will use the routes folder functions as handler
server.use('/find', routes)

module.exports = server
