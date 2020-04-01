var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SMDetails = new Schema({

    smId:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    RePassword:{
        type:String,
        required:true
    },
    Admin:{
        type:String,
        required:true
    }

});



module.exports = SMDetails;