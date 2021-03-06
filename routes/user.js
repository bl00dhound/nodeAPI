const router = require('express').Router()
const userService = require('../services/user')


router.get('/', (req, res) => {
  userService.getAll()
    .then( users =>  res.status(200).send(users))
    .catch( err => res.sendStatus(400))
})

router.get('/:id', (req, res) => {
  userService.getById(req.params.id)
    .then( user =>  res.status(200).send(user))
    .catch( err => res.sendStatus(400))
})

router.get('/:id/search', (req, res) => {
  userService.findReceivers(req.params.id)
    .then( users =>  res.status(200).send(users))
    .catch( err => res.sendStatus(400))
})

router.post('/', (req, res) => {
  userService.addUser(req.body)
    .then( user => res.status(201).send(user))
    .catch( err => res.sendStatus(400))
})

router.put('/:id', (req, res) => {
  userService.updateUser(req.params.id, req.body)
    .then( user => res.status(200).send(user))
    .catch( err => res.sendStatus(400))
})

router.delete('/:id', (req, res) => {
  userService.deleteById(req.params.id)
    .then( user => res.status(200).send(user))
    .catch( err => res.sendStatus(400))
})

module.exports = router