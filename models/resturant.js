const mongoose = require('mongoose');
const resturantSchema = new mongoose.Schema({
    resturant_name:{
        type:String,
        required:true
    },
    resturant_address:{
        type:String,
        required:true
    },
    res_image:{
        type:String
    }
},{timestamps:true});


const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    foodname:{
        type:String,
     
    },
    foodimage:{
        type:String
    },
    price:{
        type:String,
     
    },
    restaurant:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Resturant"
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"FoodCategory"
    },
},{timestamps:true});

module.exports=mongoose.model('Food',foodSchema);

module.exports = mongoose.model('Resturant',resturantSchema);

