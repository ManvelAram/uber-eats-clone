var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var OrdersSchema = new Schema({
    id : Number,
    img : String,
    title : String,
    price : String,
    deliveryTime : String,
});
module.exports = mongoose.model('Orders', OrdersSchema);