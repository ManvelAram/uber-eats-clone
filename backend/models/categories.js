var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var CategoriesSchema = new Schema({
    name : String,
    icon : String,
    id : Number
});
module.exports = mongoose.model('Categories', CategoriesSchema);