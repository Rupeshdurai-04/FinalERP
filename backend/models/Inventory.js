const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  stockOnHand: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);
