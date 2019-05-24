const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// Used to send json with our form
app.use(express.json());

// URI is how the server is connected
const uri = 'mongodb+srv://zahin_43:zahin_4321@cluster0-re3uw.gcp.mongodb.net/test?retryWrites=true'
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;

// OPENED CONNECTION
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});