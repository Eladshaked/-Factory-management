const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        userName: String,
        email: String
      },
      { versionKey: false }
)

const User = mongoose.model('user', userSchema)


module.exports = User