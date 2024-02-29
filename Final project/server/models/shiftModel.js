const mongoose = require('mongoose')

const shiftSchema = new mongoose.Schema(
  {
    date : Date,
    startHour : Number,
    endHour : Number,
    shiftEmployees : Array
    },
    { versionKey: false }
)

const Shift = mongoose.model('shift', shiftSchema)

module.exports = Shift