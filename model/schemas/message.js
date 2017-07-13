const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  senderId: {
    type: Schema.ObjectId,
    require: true
  },
  receiverId: {
    type: Schema.ObjectId,
    require: true
  },
  text: {
    type: String
  }
})



module.exports = mongoose.model('message', messageSchema)