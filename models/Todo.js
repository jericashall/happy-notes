const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  date:{//will generate the time and date @ the time a note is created. 
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Todo', TodoSchema)
