const express = require('express')
const cors = require('cors')
const conectMongoDB = require('./configs/mongodb')

const routerLogin = require("./routers/routerLogin")
const routerEmloyees = require("./routers/routerEmloyees")
const routerDepartment = require("./routers/routerDepartment")
const routerShifts = require("./routers/routerShifts")

const app = express()
const port = 8001

conectMongoDB()

app.use(cors());
app.use(express.json());

app.use('/login', routerLogin)
app.use('/employees', routerEmloyees)
app.use('/Department', routerDepartment)
app.use('/shifts', routerShifts)


app.listen(
    port, () => {
        console.log(`\nThe app is litening at http://localhost::${port}`)
    }
)