const router = require('express').Router()
const userService = require('../services/user')


router.post('/', (req, res) => {
  userService.addUser(req.body)
    .then( user => res.status(201).send(user))
    .catch( err => res.sendStatus(400))
})

module.exports = router