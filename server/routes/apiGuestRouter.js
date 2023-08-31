const guestRouter = require('express').Router();
const { Guest } = require('../db/models');

guestRouter.get('/', async (req, res) => {
  try {
    const allGuest = await Guest.findAll();
    console.log(allGuest);
    res.json(allGuest);
  } catch (err) {
    res.status(500);
  }
});

module.exports = guestRouter;
