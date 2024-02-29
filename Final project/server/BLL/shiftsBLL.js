const Shift = require('../models/shiftModel');

const getAllShifts = async () => {
  const shifts = await Shift.find({}).sort({ date: 1 });
  return shifts;
};

const getShiftById = async(id) => {
  const shift =  await Shift.find({ _id: id.id });
  return shift
};

const addShift = async (obj) => {
    const shift = new Shift(obj);
    await shift.save();
    return 'Created!';
};


const addEmployee = async (id, obj) => {
  const shift =  await Shift.find({ _id: id});
  const shiftEmployees = shift[0].shiftEmployees
  shiftEmployees.push(obj.employeeId)

  await Shift.findByIdAndUpdate(id, {shiftEmployees : shiftEmployees});
  return 'Created!';
};

const deleteEmployee = async (id, obj) => {
  const shift =  await Shift.find({ _id: id});
  const shiftEmployees = shift[0].shiftEmployees
  shiftEmployees.splice(shiftEmployees.indexOf(obj.employeeId), 1);
  if (shiftEmployees.length == 0) {
    return 'can`t delete all employees'
  }

  await Shift.findByIdAndUpdate(id, {shiftEmployees : shiftEmployees});
  return 'Created!';
};

const updateShift = async (id, obj) => {
  await Shift.findByIdAndUpdate(id, obj);
  return 'Updated!';
};

const deleteShift = async (id) => {
  await Shift.findByIdAndDelete(id);
  return 'Deleted!';
};

module.exports = {
  getAllShifts,
  getShiftById,
  addShift,
  updateShift,
  deleteShift,
  addEmployee,
  deleteEmployee
};
