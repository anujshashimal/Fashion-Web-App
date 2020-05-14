const mongoose = require('mongoose');

const Category_ID = new mongoose.Schema({

    Category_ID: {
        type: Number,
        required: true
    }


});

const CategoryID = mongoose.model('CategoryID',Category_ID);

module.exports = CategoryID;