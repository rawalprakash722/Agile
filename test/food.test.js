const express = require('express');
require('dotenv').config();
const foodRouter = require('../models/food');
var ObjectId = require('mongodb').ObjectID;

// Setup
require('./setup');

describe('Test of Food Route', () => {
    test('it should add a new food',()=>{
        return foodRouter.create({  
            _id:ObjectId('6029647169d6ad1e1ce02835'),  
            foodname:'Burger',
            price: '250', 
            category: ObjectId('6026324d9243b507d0df744f'), 
            restaurant: ObjectId('6026324d4eccbc17b88a9aeb'), 
            foodimage: 'imageBurgerHouse.jpg'
        }).then((Response)=>{
            expect(Response.foodname).toBe('Burger')
            expect(Response.price).toBe('250')
            expect(Response.category).toStrictEqual(ObjectId('6026324d9243b507d0df744f'))
            expect(Response.restaurant).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
            expect(Response.foodimage).toBe('imageBurgerHouse.jpg') 
        })
    })

    test('it should retrieve the food details',()=>{
        return foodRouter.findById({_id:ObjectId('6029647169d6ad1e1ce02835')})
        .then((Response)=>{
            expect(Response.foodname).toBe('Burger')
            expect(Response.price).toBe('250')
            expect(Response.category).toStrictEqual(ObjectId('6026324d9243b507d0df744f'))
            expect(Response.restaurant).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
            expect(Response.foodimage).toBe('imageBurgerHouse.jpg') 
        })
    })

    test('it should update the food',()=>{
        return foodRouter.findByIdAndUpdate({_id:ObjectId('6029647169d6ad1e1ce02835')},
        {  
            foodname:'Burgers',
            price: '350', 
            category: ObjectId('6026324d9243b507d0df744f'), 
            restaurant: ObjectId('6026324d4eccbc17b88a9aeb'), 
            foodimage: 'imageBurgerHouses.jpg'
        }, {new: true})
        .then((Response)=>{
            expect(Response.foodname).toBe('Burgers')
            expect(Response.price).toBe('350')
            expect(Response.category).toStrictEqual(ObjectId('6026324d9243b507d0df744f'))
            expect(Response.restaurant).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
            expect(Response.foodimage).toBe('imageBurgerHouses.jpg') 
        })
    })

    test('it should delete the food',()=>{
        return foodRouter.findByIdAndDelete({_id:ObjectId('6029647169d6ad1e1ce02835')})
        .then((Response)=>{
            expect(Response._id).toStrictEqual(ObjectId('6029647169d6ad1e1ce02835'))
        })
    })
})