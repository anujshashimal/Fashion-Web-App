const mongoose = require('mongoose');

const SMID = new mongoose.Schema({

    smId: {
        type: Number,
        required: true
    }


});

const StoreManagerID = mongoose.model('smid',SMID);

module.exports = StoreManagerID;