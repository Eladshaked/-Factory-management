const mongoose = require('mongoose')

const conectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/NodeJS_Project')
    .then(() => console.log("\nconnect to mongoDB\n"))
    .catch((error) => console.log(error))
}

module.exports = conectDB