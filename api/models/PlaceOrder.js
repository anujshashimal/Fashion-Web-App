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
    address1:{
        type:String,
    },
    state:{
        type:String,
        required:true
    },
    postalCode:{
        type:String,
    },
    contactNo:{
        type:String,
        required:true
    },
    OrderId:{
        type:String,
        required:true
    },
    TrackingNum:{
        type:String,
        required:true
    },
    TotalCost:{
        type:String,
        required:true
    },
    deliverHome:{
      type: String,
    },
    cardNumber:{
        type:String,
    },
    cvv:{
        type:String,
    },
    expireDate:{
        type:String,
    }



});

const PlaceOrders = mongoose.model('PlaceOrder',PlaceOrderr);

module.exports = PlaceOrders;