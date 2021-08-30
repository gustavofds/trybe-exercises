const express = require('express');
const userRouter = require('./userRoutes');

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('App running on port 3000!');
});
