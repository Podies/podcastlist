var mongoose = require('mongoose');
var Schema = mongoose.Schema

var categorySchema = Schema({
  name: String,
  icon: String,
});


var Category = module.exports = mongoose.model('Category', categorySchema);