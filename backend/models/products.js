var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var ProductsSchema = new Schema({
    id : Number,
    img : String,
    title : String,
    price : String,
    cal : String,
});
module.exports = mongoose.model('Products', ProductsSchema);