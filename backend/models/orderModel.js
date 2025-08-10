const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    cardItems:Array,
    name:String,
    price:String,
    date:String
})


const orderModel = mongoose.model('order',orderSchema);

module.exports = orderModel;