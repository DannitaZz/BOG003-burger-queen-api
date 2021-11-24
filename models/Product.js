const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: String,
  price: {
    type: Number,
    default: 0,
  },
  imagen: String,
  type: String,
});

module.exports = model('Product', productSchema);
