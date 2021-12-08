const { Router } = require('express');

const route = Router();
const User = require('./Entities/User');
let users = [];

route.get('/', (request, response) => {
  response.send(users);  
});

route.post('/', (request, response) => {
  let user = new User(request.body);
  
  users.push(user);

  response.send({
    message: 'User created.',
    data: user
  });
});

module.exports = route;
