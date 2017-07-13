const router = require('express').Router()


router.use('/', (req, res) => {
  res.send('inside user route')
})

module.exports = router