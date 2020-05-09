const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comments_Schema  =  mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    productId :{
        type: String,
        required:true
    },
    Comment :{
        type: String,
        required:true
    },
});

const Comments = mongoose.model('Comments',Comments_Schema);

module.exports = Comments;


