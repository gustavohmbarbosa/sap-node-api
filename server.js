const express = require('express');
const app = express();
const port = 3100;
const routes = require('./routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at https://sap-node-api.gustavohmbarbosa.repl.co/`);
});