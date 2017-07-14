const router = require('express').Router()
const messageService = require('../services/message')


router.get('/', (req, res) => {
  messageService.getAll()
    .then( message =>  res.status(200).send(message))
    .catch( err => res.sendStatus(400))
})

module.exports = router