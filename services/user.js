const R = require('ramda')
const User = require('../model/index').User
const Message = require('../model/index').Message


const addUser = (user) => new User(user).save()

const getAll = () => User.find({})

const getById = (userId) => User.findById(userId)

const updateUser = (userId, data) => User.findByIdAndUpdate(userId, data, {new : true})

const deleteById = (userId) => User.findByIdAndRemove(userId)

const findReceivers = (senderId) => Message.find({senderId: senderId})
  .then(R.pluck('receiverId'))
  .then(R.uniq)
  .then(receiverIds => User.find({
    _id: {
      $in: receiverIds
    }
  }))



module.exports = {
  addUser,
  getAll,
  getById,
  updateUser,
  deleteById,
  findReceivers
}