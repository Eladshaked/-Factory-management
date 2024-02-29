const usersWS = require('../DAL/usersWS')
const jwt = require('jsonwebtoken')


const getAllUsers = async () => {
    const {data} = await usersWS.getAllUsers()
    let users = []

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        users.push({
            username: element.username,
            email: element.email,
            name: element.name
        })
        
    }
    return users
}


const checkUser = async (username, email) => {
    const allUsers = await getAllUsers()
    const user = allUsers.find(user => user.username == username)
    if(user != undefined){
        if (user.email == email) {
            const ACCESS_SECRET_TOKEN = 'someKey';
        
            const accessToken = jwt.sign(
              { user: user},
              ACCESS_SECRET_TOKEN
            );
            console.log('success')
            return {accessToken}
        }}
    else{
        console.log('\nUnregistered user\n')
        return('Unregistered user')
    }

}



module.exports = {
    getAllUsers,
    checkUser
}