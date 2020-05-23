const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WatchLists = new Schema({

    userID:{
        type:String,
    },
    watchID:{
        type:String,
    },
    counter:{
        type:Number,
    },
    avaliable:{
        type:Number,
    },
    productID:{
        type:String,
    },
    price:{
        type:Number,
    },name:{
        type:String,
    },
    image:{
        type:String,
    },discount:{
        type:Number,
    }
});

const WatchItems = mongoose.model('WatchList',WatchLists);

module.exports = WatchItems;