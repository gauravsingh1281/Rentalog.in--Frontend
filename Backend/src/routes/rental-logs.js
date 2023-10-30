const express = require('express');
const router = express.Router();
const RentalLog = require('../models/RentalLog');

// Get a list of all rental logs
router.get('/', async (req, res) => {
    const rentalLogs = await RentalLog.find();
    res.send(rentalLogs);
});

// Get a specific rental log by ID
router.get('/:id', async (req, res) => {
    const rentalLog = await RentalLog.findById(req.params.id);
    res.send(rentalLog);
});

// Create a new rental log
router.post('/', async (req, res) => {
    const rentalLog = new RentalLog(req.body);
    await rentalLog.save();
    res.send(rentalLog);
});

// Update a specific rental log by ID
router.put('/:id', async (req, res) => {
    const rentalLog = await RentalLog.findByIdAndUpdate(req.params.id, req.body);
    res.send(rentalLog);
});

// Delete a specific rental log by ID
router.delete('/:id', async (req, res) => {
    await RentalLog.findByIdAndDelete(req.params.id);
    res.send('Rental log deleted successfully');
});

module.exports = router;
