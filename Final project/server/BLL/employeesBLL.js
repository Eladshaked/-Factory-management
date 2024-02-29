const Employee = require('../models/employeeModel');
const Department = require('../models/departmentModel');

const getAllEmployees = async () => {
  const employees = await Employee.find({});
  
  const res_Data = await Promise.all(employees.map(async (d) => {
    const department = await Department.find({ _id: d.DepartmentID });
    return {
      _id: d._id,
      firstName: d.firstName,
      lastName: d.lastName,
      startWork: d.startWork,
      department: department[0].name
    };
  }));
  
  return res_Data;
};

const getEmployeeById = async(id) => {
  const employee =  await Employee.find({ _id: id.id });
  const DepartmentID = (await Department.find({ _id: employee[0].DepartmentID }))[0].name
  return [employee, DepartmentID]
};

const addEmployee = async (obj) => {
  try {
    const DepartmentID = await Department.find({name: obj.DepartmentID})
    obj.DepartmentID = DepartmentID[0]._id
    const employee = new Employee(obj);
    await employee.save();
    return 'Created!';

  } catch (error) {

      console.error(error);
    
  }
};


const updateEmployee = async (id, obj) => {
  const oldDepartment = await Department.find({manager: `${obj.firstName} ${obj.lastName}`})
  if (oldDepartment[0] != undefined) {
    await Department.findByIdAndUpdate(oldDepartment[0]._id, {manager: ""});
  }
  
  const newDepartment = await Department.find({_id: obj.DepartmentID})
  obj.DepartmentID = newDepartment[0]._id

  await Employee.findByIdAndUpdate(id, obj);
  return 'Updated!';
};

const deleteEmployee = async (id) => {
  await Employee.findByIdAndDelete(id);
  return 'Deleted!';
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee
};
