const mongoose = require('mongoose');

const SMDetailss = new mongoose.Schema({

    smId: {
        type: Number,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    RePassword: {
        type: String,
        required: true
    },
    Admin: {
        type: String,
        required: true
    }

});

const StoreManager = mongoose.model('StoreManager',SMDetailss);

module.exports = StoreManager;