const Message = require('../model/index').Message


const addMessage = (message) => new Message(message).save()

const getAll = () => Message.find({})

const getById = (messageId) => Message.findById(messageId)

const updateMessage = (messageId, data) => Message.findByIdAndUpdate(messageId, data, {new: true})

const deleteById = (messageId) => Message.findByIdAndRemove(messageId)

module.exports = {
  addMessage,
  getAll,
  getById,
  updateMessage,
  deleteById
}