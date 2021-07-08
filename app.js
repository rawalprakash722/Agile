const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const app = express();
const cors = require('cors');
const dotenv = require("dotenv").config();


   
  //Connecting with Mongodb server
  mongoose.connect('mongodb://127.0.0.1:27017/AssignmentAgile',{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
  }).then((db)=>{
      console.log("Succesfully connected to mongodb server");
  },(err)=>console.log(err));

  app.options('*', cors());
  app.use(cors());
  app.use(express.json());

  app.use('/users',userRouter);




  //Listening to Port

  app.listen(90, ()=>{
    console.log(`App is running at localhost:90`);
});