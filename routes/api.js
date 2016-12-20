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
  Category.findOne({name: req.params.category}, function(err, category) {
    if(!category) {
      res.status(400).send({message: "Bad Request"});
    }else {
      Podcast.find({category: category._id}).populate('category').exec(function(err, podcasts) {
        if(err) {
          console.log(err);
        }
        res.json({podcasts: podcasts});
      });
    }
  });
});

module.exports = router;
