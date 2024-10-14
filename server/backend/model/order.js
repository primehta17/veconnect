var mongoose = require('mongoose');
var Schema = mongoose.Schema;

orderSchema = new Schema({
  user_id: { 
    type: Schema.ObjectId, 
    ref: 'user',  
    required: true 
  },
  product_id: { 
    type: Schema.ObjectId, 
    ref: 'product',  
    required: true 
  },
  quantities: { 
    type: Number, 
    required: true,
    min: 1 
  },
  is_delete: { 
    type: Boolean, 
    default: false 
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

order = mongoose.model('order', orderSchema);

module.exports = order;
