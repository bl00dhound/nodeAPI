const router = require('express').Router()

router.use('/', (req, res) => {
  res.send('inside message route')
})

module.exports = router