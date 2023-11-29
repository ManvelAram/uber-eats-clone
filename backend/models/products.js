var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var ProductsSchema = new Schema({
    id : Number,
    img : String,
    title : String,
    price : String,
    cal : String,
    restaurantId: Number
});
module.exports = mongoose.model('Products', ProductsSchema);