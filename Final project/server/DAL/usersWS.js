const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users';

const getAllUsers = (id) => {
  return axios.get(`${url}`);
};

module.exports = { getAllUsers };
