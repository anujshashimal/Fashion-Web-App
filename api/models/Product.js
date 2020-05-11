const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product_Schema  =  mongoose.Schema({
    
    productid :{
         type : String,
         required :true,
         unique: true
    },
    description : {
        type : String,
        required : true
    },
    maincategory : {
        type : String,
        required :true
    },
    subcategory :{
        type: String,
        required:true
    },
    price  : {
        type :Number,
        required:true
    },
    quantity :{
        type : Number,
        required :true
    },
    discount : {
       type : Number,
       required :true
    },
    image :{
        type: String,
        required :true
     },
    stockmanagerid:{
        type :String,
        required :true,
    },

});

const Product = mongoose.model('Product',Product_Schema);

module.exports = Product;
