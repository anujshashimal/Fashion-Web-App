const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WatchLists = new Schema({

    userID:{
        type:String,
        required:true
    },
    qty:{
        type:String,
        required:true
    },
    avaliable:{
        type:String,
    },
    Product_ID:{
        type:String,
    },
    price:{
        type:String,
    },name:{
        type:String,
    },
    image:{
        type:String,
    },discount:{
        type:String,
    }
});

const WatchItems = mongoose.model('WatchList',WatchLists);

module.exports = WatchItems;