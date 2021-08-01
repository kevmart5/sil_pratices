const express = require("express");
const app = express();
const router = express.Router();
const usersController = require('./src/controllers/users.controller');

router.get('/', (req, res) => {
  res.send('it works');
});

router.get('/users', usersController.getUsers);
router.post('/users', (req, res) => {
  res.send('it works post users');
})

app.use('/', router);

module.exports = app;