const express = require('express')
const jwt = require('jsonwebtoken')
const employeeBLL = require('../BLL/employeesBLL')


const router = express.Router();

router.route('/').get((req, res) => {
  try {
    const token = req.headers['x-access-token'];
  
    if (!token) {
      return res.status(401).json('No Token Provided!');
    }
  
    const ACCESS_SECRET_TOKEN = 'someKey';
  
    jwt.verify(token, ACCESS_SECRET_TOKEN, async (err, data) => {
      if (err) {
        return res.status(500).json('Failed to authenticate token');
      }
      const employees = await employeeBLL.getAllEmployees()
      const resData = [data.user, employees]
      // Get data from DB and send to the user
    return res.json(resData);
    });
  }catch(e) {
    console.log(`\nget all employees\n${e.message}`)
  }
   
  });



router.route('/').post(async(req, res) => {
  try {
    const obj = req.body;
    const result = await employeeBLL.addEmployee(obj)
    res.json(result)
  }catch(e) {
    console.log(`\post employees\n${e.message}`)
  }
  
})

router.route('/:id').get(async(req, res) => {
  try {
    const id = req.params
    const data = await employeeBLL.getEmployeeById(id)
    res.json(data)
  }catch(e) {
    console.log(`\nget employee by ID\n${e.message}`)
  }
   
})

router.route('/:id').put(async(req, res) => {
  try {
    const id = req.params.id;
    const obj = req.body;
    const data = await employeeBLL.updateEmployee(id, obj)
    res.json(data)
    
  }catch(e) {
    console.log(`\nput employee\n${e.message}`)
  }

})

router.route('/:id').delete(async (req, res) => {
  try {
    const id = req.params.id
    const data = await employeeBLL.deleteEmployee(id)
    res.json(data)
  }catch(e) {
    console.log(`\ndelete employee\n${e.message}`)
  }
  
})

module.exports = router