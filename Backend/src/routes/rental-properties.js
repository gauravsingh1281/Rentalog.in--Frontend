const express = require('express');
const router = express.Router();
const RentalProperty = require('../models/RentalProperty');

// Get a list of all rental properties
router.get('/', async (req, res) => {
    const rentalProperties = await RentalProperty.find();
    res.send(rentalProperties);
});

// Get a specific rental property by ID
router.get('/:id', async (req, res) => {
    const rentalProperty = await RentalProperty.findById(req.params.id);
    res.send(rentalProperty);
});

// Create a new rental property
router.post('/', async (req, res) => {
    const rentalProperty = new RentalProperty(req.body);
    await rentalProperty.save();
    res.send(rentalProperty);
});

// Update a specific rental property by ID
router.put('/:id', async (req, res) => {
    const rentalProperty = await RentalProperty.findByIdAndUpdate(req.params.id, req.body);
    res.send(rentalProperty);
});

// Delete a specific rental property by ID
router.delete('/:id', async (req, res) => {
    await RentalProperty.findByIdAndDelete(req.params.id);
    res.send('Rental property deleted successfully');
});

module.exports = router;
