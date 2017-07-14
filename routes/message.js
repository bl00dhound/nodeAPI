const router = require('express').Router()
const messageService = require('../services/message')


router.get('/', (req, res) => {
  messageService.getAll()
    .then( message => res.status(200).send(message))
    .catch( err => res.sendStatus(400))
})

router.get('/:id', (req, res) => {
  messageService.getById(req.params.id)
    .then( message => res.status(200).send(message))
    .catch( err => res.sendStatus(400))
})

router.post('/', (req, res) => {
  messageService.addMessage(req.body)
    .then( message => res.status(200).send(message))
    .catch( err => res.sendStatus(400))
})

router.put('/:id', (req, res) => {
  messageService.updateMessage(req.params.id, req.body)
    .then( message => res.status(200).send(message))
    .catch( err => res.sendStatus(400))
})

router.delete('/:id', (req, res) => {
  messageService.deleteById(req.params.id)
    .then( message => res.status(200).send(message))
    .catch( err => res.sendStatus(400))
})

module.exports = router