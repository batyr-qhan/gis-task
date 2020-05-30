const express = require('express');
const Marker = require('../models/marker');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res, next) => {
  const marker = new Marker({
    firstCoord: req.body.xcoordinate,
    secondCoord: req.body.ycoordinate,
    name: req.body.title,
  });
  marker
    .save()
    .then((item) => {
      // res.send('item saved to database');
      res.redirect('/');
    })
    .catch((err) => {
      res.status(400).send('unable to save to database');
    });
});

module.exports = router;
