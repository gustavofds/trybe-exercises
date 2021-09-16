const express = require('express');
const dotenv = require('dotenv');
const authController = require('./controllers/authController');
const usersController = require('./controllers/usersController');

dotenv.config();

const app = express();

app.use(express.json());

app.post('/login', authController.login);
app.get('/users/me', usersController.getMe);

app.listen(3000, () => { console.log('Listening on port 3000...')});
