const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceOrderr = new Schema({

    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    OrderId:{
        type:String,
        required:true
    },
    TotalCost:{
        type:String,
        required:true
    },cardNumber:{
        type:String,
        required:true
    },
    cvv:{
        type:String,
        required:true
    },
    expireDate:{
        type:String,
        required:true
    }


});

const PlaceOrders = mongoose.model('PlaceOrder',PlaceOrderr);

module.exports = PlaceOrders;