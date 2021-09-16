const express = require('express');
const dotenv = require('dotenv');
const authController = require('./controllers/authController');

dotenv.config();

const app = express();

app.use(express.json());

app.post('/login', authController.login);

app.listen(3000, () => { console.log('Listening on port 3000...')});
