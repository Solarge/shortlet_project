const express = require('express');
const router = express.Router();
const Apartment = require('./models/Apartment');

// Get all apartments
router.get('/', async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.json(apartments);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Add a new apartment
router.post('/', async (req, res) => {
  try {
    const newApartment = new Apartment(req.body);
    const apartment = await newApartment.save();
    res.json(apartment);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
