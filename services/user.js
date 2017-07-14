const R = require('ramda')
const User = require('../model/index').User

const addUser = (user) => new User(user).save()

const getAll = () => User.find({})









module.exports = {
  addUser,
  getAll
}