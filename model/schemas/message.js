const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  senderId: {
    type: String,
    require: true
  },
  receiverId: {
    type: String,
    require: true
  },
  text: {
    type: String
  }
})



module.exports = mongoose.model('message', messageSchema)