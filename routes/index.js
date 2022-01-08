var express = require('express');
var router = express.Router();

var names = [];


/* GET home page. */
router.get('/', function (req, res, next) {

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
  res.json({ name: names });
});

router.post('/train', (req, res) => {
  console.log(req.body);
  const { input1, input2, operation } = req.body;
  try {
    switch (operation) {
      case 'SUM':
        return res.status(200).send(String(input1 + input2));
      case 'SUBTRACT':
        return res.status(200).send(String(input1 - input2));
      case 'MULTIPLY':
        return res.status(200).send(String(input1 * input2));
      case 'DIVIDE':
        return res.status(200).send(String(input1 / input2));
      case '':
        return res.status(200).send('Error');
    }
  } catch (err) {
    console.log(err);
  }

});

router.get('/name', (req, res) => {
  try {
    const { name } = req.query;

    names.push(name);

    res.send({success: 'success'});

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
