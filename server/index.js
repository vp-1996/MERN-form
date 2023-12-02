import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRouter from './router/student.router';

let app = express()
let port= 4020
app.use(express.static(__dirname))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json()) 

var corsOptions = { 
    // origin: 'http://localhost:5000',---
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT, PATCH,  POST, DELETE"
}

app.use(cors(corsOptions));

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
}) 

mongoose.connect('mongodb://127.0.0.1:27017/olio-db')

.then(()=>{
    console.log('DB sucessfully connected');
})
.catch((err)=>{
 console.log('Error',err);
})

app.use('/student',studentRouter)

