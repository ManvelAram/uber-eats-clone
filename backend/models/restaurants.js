var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var RestaurantsSchema = new Schema({
    name : String,
    icon : String,
    deliveryTime : String,
    id : Number,
    categoryIds: [Number]
});
module.exports = mongoose.model('Restaurants', RestaurantsSchema);