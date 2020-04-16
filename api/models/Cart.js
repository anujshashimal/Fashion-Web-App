const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart_det = new Schema({

    Product_ID:{
        type:String,
        required:true
    },
    User_ID:{
        type:String,
        required:true
    },
    Quntity:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    }

});

const Cart = mongoose.model('Cart',Cart_det);

module.exports = Cart;