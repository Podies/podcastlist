var express = require('express');
var router = express.Router();
var Category = require('../models/category');
var Podcast = require('../models/podcast');

/* GET home page. */
router.get('/', function(req, res) {
  var api = {
    "api/podcasts": "List of Podcasts",
    "api/categories": "List of Categories",
    "api/categories/:category/podcasts": "List of All Podcasts from Selected Category"
  };
  res.json({api: api});
});

router.get('/podcasts', function(req, res) {
  Podcast.find({}).populate('category').exec(function(err, podcasts) {
    if(err) {
      console.log(err);
    }
    res.json({podcasts: podcasts});
  });
});

router.get('/categories', function(req, res) {
  Category.find({}, function(err, categories) {
    if(err){
      console.log(err);
    }
    res.json({categories: categories});
  });
});

router.get('/categories/:category/podcasts', function(req, res) {
  let query = req.params.category;
  Category.findOne({"name": {$regex: query, $options:'i'}}).exec(function(err, category) {
    if(!category) {
      res.status(400).send({message: "Bad Request"});
    }else {
      Podcast.find({category: category._id}).populate('category').exec(function(err, podcasts) {
      if(err) {
         console.log(err);
      }
      res.json({podcasts: podcasts, category: category});
      });
    }
  });
});

router.get('/featured', function(req, res) {
  Podcast.aggregate([
    {$match: {featured: true}},
    {$group: {_id: "$category", podcast: {$push: "$$ROOT"} }},
    {$limit: 4}]).exec(function(err, podcasts) {
      if(err) {
        console.log(err);
      }
      Podcast.populate(podcasts, {path: '_id', model: 'Category'}, function(err, populatedPodcast) {
        res.json({podcasts: populatedPodcast});
      });
  });
});

router.get('/search/:searchTerm', function(req, res){
  Podcast.find({$text: { $search: req.params.searchTerm}}).populate('category', 'name').exec(function(err, data){
    if (err) {
      console.log(err);
    }
    res.json({search: data});
  });
});

module.exports = router;
