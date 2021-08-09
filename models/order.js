const mongoose = require('mongoose');
const orderSchema =  new mongoose.Schema({
    user1:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    food1:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Food',
        required:true
    },
    quanity1:{
        type:String,
        required:true
    },
    notes1:{
        type:String,
    },
    dateTime1:{
        type:String,
        required:true
    }
    user1:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    food1:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Food',
        required:true
    },
    quanity:{
        type:String,
        required:true
    },
    notes:{
        type:String,
    },
    dateTime:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('Order',orderSchema);