const express = require('express');
require('dotenv').config();
const restaurantRouter = require('../models/Restaurant');
var ObjectId = require('mongodb').ObjectID;

// Setup
require('./setup');
//Add restaurant
describe('Test of Restaurant Route', () => {
    test('it should add a new restuarant',()=>{
        return restaurantRouter.create({    
            _id: ObjectId('6026324d4eccbc17b88a9aeb'),
            resturant_name:'KFC',
            resturant_address: 'New Baneshwor', 
            res_image: 'imageKFC.jpg'
        }).then((Response)=>{
            expect(Response.resturant_name).toBe('KFC')
            expect(Response.resturant_address).toBe('New Baneshwor')
            expect(Response.res_image).toBe('imageKFC.jpg')    
        })
    })
    //show restaurant
    test('it should retrieve the restuarant details',()=>{
        return restaurantRouter.findById({_id: ObjectId('6026324d4eccbc17b88a9aeb')})
        .then((Response)=>{
            expect(Response.resturant_name).toBe('KFC')
            expect(Response.resturant_address).toBe('New Baneshwor')
            expect(Response.res_image).toBe('imageKFC.jpg')    
        })
    })
    //update restaurant
    test('it should update the restuarant details',()=>{
        return restaurantRouter.findByIdAndUpdate({_id: ObjectId('6026324d4eccbc17b88a9aeb')},
        {
            resturant_name:'Bajeko Sekuwa',
            resturant_address: 'Putali Sadak', 
            res_image: 'imageBajekoSekuwa.jpg'
        }, {new: true})
        .then((Response)=>{
            expect(Response.resturant_name).toBe('Bajeko Sekuwa')
            expect(Response.resturant_address).toBe('Putali Sadak')
            expect(Response.res_image).toBe('imageBajekoSekuwa.jpg')    
        })
    })
    //delete
    test('it should delete the restuarant',()=>{
        return restaurantRouter.findByIdAndDelete({_id: ObjectId('6026324d4eccbc17b88a9aeb')})
        .then((Response)=>{
            expect(Response._id).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
        })
    })
})