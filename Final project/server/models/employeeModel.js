const mongoose = require('mongoose')
const { Schema, SchemaTypes } = require('mongoose');


const employeeSchema = new mongoose.Schema(
  {
      firstName: {
        type: String,
        required: true,
        minlength: 3
      },
      lastName: {
        type: String,
        required: true,
        minlength: 3
      },
      startWork: {
        type: Date,
        required: true,
        minlength: 3
      },
      DepartmentID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'department',
        required: true,
        minlength: 3
      },
    },
    { versionKey: false }
)

const Employee = mongoose.model('employee', employeeSchema )


module.exports = Employee