const mongoose = require('mongoose')
const {Schema} = mongoose;


const tracker = new Schema({
  title: String,
  amount: Number,
  category: String,
  date: {type:Date, default:Date.now}
})

const Tracker = mongoose.model('tracker', tracker)
module.exports = Tracker
