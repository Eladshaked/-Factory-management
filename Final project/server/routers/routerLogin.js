const express = require('express')
const loginBLL = require('../BLL/loginBLL')


const router = express.Router();



router.route('/chekUserName').post(async(req, res) => {
    const {username} = req.body
    const {email} = req.body
    const result = await loginBLL.checkUser(username, email)

    res.json(result)
})




module.exports = router