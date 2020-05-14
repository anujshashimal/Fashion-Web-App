var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Categories = new Schema({

    Category_ID:{
        type:Number,
        required:true
    },
    CategoryName:{
        type:String,
        required:true
    },
    MainCategory:{
        type:String,
        required:true
    },
    Admin:{
        type:String,
        required:true
    }

});

const Category = mongoose.model('Category',Categories);

module.exports = Category;