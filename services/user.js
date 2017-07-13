const R = require('ramda')
const User = require('../model/index').User

const addUser = (user) => new User(user).save()









module.exports = {
  addUser
}