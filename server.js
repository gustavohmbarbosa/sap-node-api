const express = require('express');
const app = express();
const port = 3000;
const User = require('./Entities/User');

app.get('/', (req, res) => {
  let users = [];
  for (let i = 0; i < 10; i++) {
    let user = new User(i, `js${i}@gmail.com`);
    users.push(user.getData());
  }
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening at https://sap-node-api.gustavohmbarbosa.repl.co/`);
});