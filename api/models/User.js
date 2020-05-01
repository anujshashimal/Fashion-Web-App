const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User_Schema  =  mongoose.Schema({

    // userid : {
    //     type :String,
    //     required : true,
    //     unique :true,
    //     trim :true
    // },
    username : {
        type : String,
        required : true,
        unique :true,
    },
    email :{
        type: String,
        required:true
    },
    address :{
        type: String,
        required:true
    },
    contactno :{
        type: String,
        required:true
    },
    gender :{
        type: String,
        required:true
    },
    password :{
        type: String,
        required:true
    },
});

const User = mongoose.model('User',User_Schema);

module.exports = User;


