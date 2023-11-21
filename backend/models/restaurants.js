var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var RestaurantsSchema = new Schema({
    name : String,
    icon : String,
    deliveryTime : String,
    id : Number,
});
module.exports = mongoose.model('Restaurants', RestaurantsSchema);