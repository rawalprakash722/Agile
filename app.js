const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const uploadRouter = require('./routes/uploads');
const foodCat = require('./routes/foodCategory');
const resturantRouter = require('./routes/Restaurant');
const food = require('./routes/Food');
const cartRouter = require('./routes/cart');
const auth = require('./auth');
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
      console.log("Succesfully connected to mongodb database server");
  },(err)=>console.log(err));

  app.use(express.static(__dirname + "/public"));
  app.options('*', cors());
  app.use(cors());
  app.use(express.json());

  app.use('/users',userRouter);
  app.use('/upload',uploadRouter);
  app.use('/foodCat',foodCat);
  app.use('/resturants',resturantRouter);
  app.use('/foods', food);

  app.use(auth.verifyUser);
  app.use('/cart',cartRouter);



  //Listening to Port

  app.listen(90, ()=>{
    console.log(`App is running at localhost:90`);
});