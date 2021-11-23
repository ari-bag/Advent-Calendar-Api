const express = require("express");
const apiRouter = express.Router();
const Present = require("../models/PresentModel");
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json()

/* GET all presents  */
apiRouter.get("/", function (req, res, next) {
  Present.find()
    .then((present) => {
      console.log('present', present)
      res.status(200).json(present);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

/* GET present by day */
apiRouter.get("/:day", function (req, res, next) {

  const day = req.params.day;

  const dayOfToday = new Date();

  if (Number(day) !== Number(dayOfToday.getDate())) {

    return res.status(500).send('PresentNoOpen');
  };

  Present.findOne({ day: day })
  .then((present) => {
    res.status(200).json(present);
  })
  .catch((err) => {
    res.status(404).json(err);
  });
});

// createNewPresent function - To create new todo
apiRouter.post("/", jsonParser, (req, res) => {
  let present = new Present(req.body);

  present.save((err, present) => {

    if (err) {
      res.status(500).send(err);

    }
      res.status(201).json(present);
  });
});  

module.exports = apiRouter;
