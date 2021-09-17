require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/envios'));

app.get('/ping', controllers.ping);

const multerUpload = multer({ dest: 'envios/' });

app.post('/envios', multerUpload.single('file'), (req, res) => {
  res.status(200).json({ body: req.body, file: req.file });
});

app.use(middlewares.error);

const port = PORT || 8000;
app.listen(port, () => console.log(`App running on port ${port}`));
