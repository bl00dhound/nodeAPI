const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  login: {
    type: String,
    require: true
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String
  },
  age: {
    type: Number,
    min: 18,
    max: 65
  },
  birthday: {
    type: Date
  }
})



module.exports = mongoose.model('user', userSchema)