const Department = require('../models/departmentModel');
const Employee = require('../models/employeeModel');


const getAllDepartments = async () => {
  const allDepartment = await Department.find()
  return allDepartment
}


const getDepartmentById = async (id) => {
  const department =  await Department.find({ _id: id.id });
  return department
}


const updateDepartment = async (id, obj) => {
  const employee = (await Employee.find({_id: obj[1].employeeID}))[0]
  
  const newEmployee = {
    firstName : employee.firstName,
    lastName : employee.lastName,
    startWork : employee.startWork
  }
  newEmployee.DepartmentID = id
  
  await Department.findByIdAndUpdate(employee.DepartmentID, {manager : ""});
  await Employee.findByIdAndUpdate(employee._id, newEmployee);
  await Department.findByIdAndUpdate(id, obj[0]);
  return 'Updated!';
};



const deleteDepartment = async (id) => {
  await Department.findByIdAndDelete(id);
  await Employee.deleteMany({DepartmentID : id});
  return 'Deleted!';
};


const addDepartment = async (obj) => {
  try {
    const department = new Department(obj);
    await department.save();
    return 'Created!';

  } catch (error) {

      console.error(error);
    
  }
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
  addDepartment
};
