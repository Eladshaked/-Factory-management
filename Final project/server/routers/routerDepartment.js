const express = require('express')
const departmentBLL = require('../BLL/departmentBLL')

const router = express.Router();

router.route('/').get(async(req, res) => {
  try {
    const data = await departmentBLL.getAllDepartments()
    res.json(data)
  }catch(e) {
    console.log(`\nget all departments\n${e.message}`)
  }
})

router.route('/:id').get(async (req, res) => {
  try{
    const id = req.params
    const data = await departmentBLL.getDepartmentById(id)
    res.json(data)
  }
  catch(e){
    console.log(`\nget department by ID\n${e.message}`)
  }
})

router.route('/:id').put(async(req, res) => {
  try {
    const id = req.params.id;
    const obj = req.body;
    const data = await departmentBLL.updateDepartment(id, obj)
    res.json(data)
    
  }
  catch(e) {
    console.log(`\nput department\n${e.message}`)
  }
})


router.route('/:id').delete(async (req, res) => {
  try {
    const id = req.params.id
    const data = await departmentBLL.deleteDepartment(id)
    res.json(data)
  }catch(e) {
    console.log(`\ndelete department\n${e.message}`)
  }  
})


router.route('/').post(async(req, res) => {
  try {
    const obj = req.body;
    const result = await departmentBLL.addDepartment(obj)
    res.json(result)
  }
  catch(e) {
    console.log(`\npost department\n${e.message}`)
  }
  
})

module.exports = router