const router = require('express').Router()


router.get('/', (req, res) => {
  res.send('REST API store messages v1.0')
})


router.use('/user', require('./user'))
router.use('/message', require('./message'))



module.exports = router