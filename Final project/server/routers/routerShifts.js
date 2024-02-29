const express = require('express')
const shiftsBLL = require('../BLL/shiftsBLL')

const router = express.Router();

router.route('/').get(async(req, res) => {
  try {
    const data = await shiftsBLL.getAllShifts()
    res.json(data)
  }catch(e) {
    console.log(`\nget all shifts\n${e.message}`)
  }
})

router.route('/:id').get(async (req, res) => {
  try{
    const id = req.params
    const data = await shiftsBLL.getShiftById(id)
    res.json(data)
  }
  catch(e){
    console.log(`\nget shift by ID\n${e.message}`)
  }
})

router.route('/:id').put(async(req, res) => {
  try {
    const id = req.params.id;
    const obj = req.body;
    const data = await shiftsBLL.updateShift(id, obj)
    res.json(data)
    
  }
  catch(e) {
    console.log(`\nput shift\n${e.message}`)
  }
})


router.route('/:id').delete(async (req, res) => {
  try {
    const id = req.params.id
    const data = await shiftsBLL.deleteShift(id)
    res.json(data)
  }catch(e) {
    console.log(`\ndelete shift\n${e.message}`)
  }  
})


router.route('/').post(async(req, res) => {
  try {
    const obj = req.body;
    const result = await shiftsBLL.addShift(obj)
    res.json(result)
  }
  catch(e) {
    console.log(`\npost shift\n${e.message}`)
  }
  
})

router.route('/addEmployee/:id').put(async(req, res) => {
  try {
    const id = req.params.id
    const obj = req.body;
    const result = await shiftsBLL.addEmployee(id, obj)
    res.json(result)
  }
  catch(e) {
    console.log(`\add Employee to shift\n${e.message}`)
  }
  
})

router.route('/deleteEmployee/:id').put(async(req, res) => {
  try {
    const id = req.params.id
    const obj = req.body;
    const result = await shiftsBLL.deleteEmployee(id, obj)
    res.json(result)
  }
  catch(e) {
    console.log(`\add Employee to shift\n${e.message}`)
  }
  
})

module.exports = router