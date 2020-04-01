var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  UserID:{
    type: String,
    ref:'User',
    required: true
  },
  ItemID:{
    type: Schema.Types.ObjectId,
    required: true
  },
  Qty: {
    type: float,
  },
  Size: {
    type: float,
    default: Date.now
  },

});

module.exports = ItemSchema;