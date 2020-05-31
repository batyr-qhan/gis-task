// var express = require('express');
// var router = express.Router();

// const Marker = require('../models/marker');

// /* GET entries listing. */
// router.get('/:id', async function (req, res, next) {
//   const id = req.params.id;

//   const allData = await Marker.findById(id, function (err, doc) {
//     // mongoose.disconnect();

//     if (err) return console.log(err);

//     console.log(doc);
//   });

//   res.render('entry', { entry: allData });
// });

// router.put(':id', async function (req, res, next) {

//   const name = req.body.name;
//   const x = req.body.xcoordinate;
//   const y = req.body.ycoordinate;

//   const updated = await Marker.findOneAndUpdate({ _id: id }, { $set: { name: name, firstCoord: x, secondCoord: y } }),

// })

// module.exports = router;
