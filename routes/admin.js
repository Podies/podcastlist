var express = require('express');
var router = express.Router();

var Podcast = require('../models/podcast');
var Category = require('../models/category');

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('dashboard');
});

router.get('/podcast', function(req, res) {
  Podcast.find({}).populate('category', 'name').exec(function(err, podcasts) {
    if(err) {
      console.log(err);
    }
    var model = {
      podcasts: podcasts
    }
    res.render('podcast/index', model);
  })
});

router.get('/podcast/add', function(req, res) {
  Category.find({}, function(err, categories) {
    if(err){
      console.log(err);
    }
    var model = {
      categories: categories
    }
    res.render('podcast/addpodcast', model);
  });
});

router.post('/podcast/add', function(req, res) {
  var name = req.body.name;
  var description = req.body.description;
  var category = req.body.category;
  var cover = req.body.cover;
  var featured = req.body.featured;
  var website = req.body.website;

  if(!name || !category || !cover || !website) {
    res.status(404).send({message:"Name, Category, Cover and Website link are Must..!!"});
  } else {
    var newPodcast = new Podcast({name: name, description: description,
     category: category, cover: cover, featured: featured, website: website});

    newPodcast.save(function(err, savedPodcast) {
      if(err) {
        console.log(err);
      }
      res.redirect('/admin/podcast');
    });
  }
});

router.get('/category', function(req, res) {
  Category.find({}, function(err, categories) {
    if(err){
      console.log(err);
    }
    var model = {
      categories: categories
    }
    res.render('category/index', model)
  });
});

router.get('/category/add', function(req, res) {
  res.render('category/addcategory')
});

router.post('/category/add', function(req, res) {
  var name = req.body.name;
  var icon = req.body.icon;

  if(!name || !icon) {
    res.status(404).send({message: "All fields are must"});
  }
  var newCategory = new Category({name: name, icon: icon});
  newCategory.save(function(err, savedCategory) {
    if(err) {
      console.log(err);
    }
    res.redirect('/admin/category');
  });
});

module.exports = router;
