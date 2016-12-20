var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('podcast/index');
});

router.get('/add', function(req, res) {
  res.render('podcast/addpodcast');
});

router.get('/category', function(req, res) {
  res.render('category/index')
});

router.get('/category/add', function(req, res) {
  res.render('category/addcategory')
})

module.exports = router;
