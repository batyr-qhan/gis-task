const express = require('express');

const router = express.Router();
const Marker = require('../models/marker');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const allData = await Marker.find({});
  // res.send(allData)
  res.render('index', { title: 'Express', allData });
});

router.get('/data', async (req, res, next) => {
  const allData = await Marker.find({});
  res.send(allData);
});

// создаем маркер

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

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const allData = await Marker.findById(id, (err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
  });
  res.render('entry', { entry: allData });
});

// форма для редактирования

router.get('/:id/edit', async (req, res) => {
  const { id } = req.params;

  const allData = await Marker.findById(id, (err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
  });
  res.render('edit', { entry: allData });
});

// обновляем маркер

// router.post('/:id', (req, res) => {
//   res.redirect(`/${req.params.id}`);
// });

router.put('/:id', async (req, res) => {
  const { id } = req.params;

  await Marker.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name: req.body.name,
        firstCoord: req.body.xcoordinate,
        secondCoord: req.body.ycoordinate,
      },
    },
    (err, doc) => {
      if (err) return console.log(err);
      console.log(doc);
    },
  );

  res.redirect(`/${id}`);
});

// router.put("/:id", async function(req, res, next) {
//   let entry = await Entry.findById(req.params.id);

//   entry.title = req.body.title;
//   entry.body = req.body.body;
//   await entry.save();

//   res.redirect(`/entries/${entry.id}`);
// });

router.delete('/:id', async (req, res) => {
  await Marker.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) return console.log(err);
    res.redirect('/');
  });
});

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   // await Marker.deleteOne({ _id })

//   await Marker.findOneAndDelete({ _id: id }, (err, result) => {
//     if (err) return console.log(err);
//     res.send(result);
//   });
// });

module.exports = router;
