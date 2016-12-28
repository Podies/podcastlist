var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = Schema({
  email: String,
  categorySubscribed: [{type: Schema.Types.ObjectId, ref: 'Category'}],
});


var User = module.exports = mongoose.model('User', userSchema);
