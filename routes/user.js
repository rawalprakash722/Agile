const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();



router.get('/',(req,res,next)=> {
    User.find({})
    .then((user)=>{
        status=200;
        res.json(user);
    })
    .catch((err)=>next(err));

})

router.post('/signup', (req, res, next) => {
    let password = req.body.password;
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            let err =  new Error('Could not hash!');
            err.status = 500;
            return next(err);
        }
        User.findOne({email:req.body.email})
            .then((user)=>{
                if(user==null){
                    User.create({
                        fullname:req.body.fullname,
                        email:req.body.email,
                        password:hash,
                    }).then((user) => {
                        let token = jwt.sign({_id:user._id}, process.env.SECRET);
                        res.json({ status: "success", token: token, fullname: user.fullname});
                    }).catch(next);
                }
                else{
                    res.json({status:"exists"});
                }
            }).catch(next);
    });
});

router.post('/login', (req, res, next) => {
    User.findOne({email: req.body.email})
        .then((user) => {
            if (user==null) {
                res.json({status:'401'})
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then((isMatch) => {
                        if (!isMatch) {
                            res.json({status:'401'})
                        }
                        let token = jwt.sign({ _id: user._id}, process.env.SECRET);
                        res.json({ status: 'success', token: token, role: user.role, fullname: user.fullname });
                    }).catch(next);
            }
        }).catch(next);
});

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
    type: String,
    default: 'admin',
    enum: ['customer', 'admin','restaurant']
    },
}, {timestamps:true});

module.exports = mongoose.model('User',userSchema);
module.exports = router;