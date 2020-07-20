const db = require('../db')
const express = require('express')

const router = express.Router()
module.exports = router

router.post('/', (req, res) => {
  console.log(req)
  db.addYaBeer(req.name)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
