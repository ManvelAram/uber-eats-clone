var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var OrdersSchema = new Schema({
    products: [
        {
            id : Number,
            count : Number,
            price : Number,
        }
    ],
    deliveryTime : String,
    deliveryAdress : String,
});
module.exports = mongoose.model('Orders', OrdersSchema);