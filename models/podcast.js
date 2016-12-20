var mongoose = require('mongoose');
var Schema = mongoose.Schema

var podcastSchema = Schema({
  name: String,
  description: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  cover: String,
  website: String,
  featured: Boolean,
});


var Podcast = module.exports = mongoose.model('Podcast', podcastSchema);