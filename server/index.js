const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

// use express.json() to get data into json format
app.use(express.json());

// Port
const PORT = process.env.PORT;

// use cors
app.use(cors());


// lets import routers
const TodoItemRoute = require('./routes/todoItems');


// let connect to mongo db...
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))




app.use('/', TodoItemRoute );


// Add port and connect to server


app.listen(PORT, () => {
    console.log(`Server is running at port no: ${PORT}`);
});