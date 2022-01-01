var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // execute DB query

  // get name from data base

  // pass name in render

  let name = 'Manpreet';

  res.render('index', { name: name });
});

// Representational State Transfer

// HTTP VERBS

// GET: 
// POST
// PATCH
// PUT
// DELETE

router.get('/train', function (req, res) {
  res.json({title: 'Shyam'});
});

router.post('/train', (req, res) => {
  console.log(req.body)
  res.json({message: 'data stored successfully'});
});

module.exports = router;
