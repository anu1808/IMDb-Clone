const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(bodyParser.json());

mongoose.connect('mongodb://0.0.0.0:27017/ESD', { useNewUrlParser: true, useUnifiedTopology: true });

server.use(express.json())
const movieRouter = require ('./routes/movies')
server.use('/movies',movieRouter)

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
