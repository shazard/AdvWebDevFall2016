var mongoose = require('mongoose');

var productDataSchema = new mongoose.Schema({
    
    product: String,
    description: String,
    price: String
});


var ProductData = mongoose.model('ProductData', productDataSchema);

module.exports = ProductData;