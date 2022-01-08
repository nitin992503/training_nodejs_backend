var express = require('express');
var router = express.Router();

var names = [];

router.get('/nodejs', function (req, res, next) {
  res.send('nodejs');
});

router.get('/java', function (req, res, next) {
    res.send('java');
});
  

module.exports = router;
