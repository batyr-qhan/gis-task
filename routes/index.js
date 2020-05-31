const express = require('express');

const router = express.Router();

const Marker = require('../models/marker');


/* GET home page. */
router.get('/', async (req, res, next) => {
  const allData = await Marker.find({})
  // res.send(allData)
  res.render('index', { title: 'Express', allData: allData });
});

router.get('/data', async (req, res, next) => {
  const allData = await Marker.find({})
  res.send(allData)
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
      // alert('item saved to database');
      res.redirect('/');
    })
    .catch((err) => {
      res.status(400).send('unable to save to database');
    });
});

router.get('/:id', async function (req, res, next) {
  const id = req.params.id;

  const allData = await Marker.findById(id, function (err, doc) {
    // mongoose.disconnect();

    if (err) return console.log(err);

    console.log(doc);
  });
  res.render('entry', { entry: allData });
});

router.put('/:id', async function (req, res, next) {
  await Marker.findOneAndUpdate({ _id: req.params.id }, { $set: { name: req.body.name, firstCoord: req.body.xcoordinate, secondCoord: req.body.ycoordinate } }, function (err, doc) {
    if (err) return console.log(err);
    res.send(doc);
  });
})

router.delete('/:id/delete', async (req, res, next) => {
  const id = req.params.id;
  // await Marker.deleteOne({ _id })

  await Marker.findOneAndDelete({ _id: id }, function (err, result) {

    if (err) return console.log(err);
    res.send(result);
  });
})

module.exports = router;
