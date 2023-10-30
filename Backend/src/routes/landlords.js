const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Landlord = require('../models/Landlord');
const Landlord = require('../models/Landlord');

// Get a list of all landlords
router.get('/', async (req, res) => {
    const landlords = await Landlord.find();
    res.send(landlords);
});
router.post('/landlord_registration', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await Landlord.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Landlord With this email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password);
        const newLandlord = new Landlord({
            name, email, password: hashedPassword,
        });
        await newLandlord.save();
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/landlord_login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const landlord = await Landlord.findOne({ email });
        if (!landlord) {
            return res.status(401).json({
                message: 'Invalid email or password'
            })
        }

        const passwordMatch = await bcrypt.compare(password, landlord.password);
        if (!passwordMatch) {
            return res.status(401).json({
                message: 'Invalid password or email'
            });
        }
        const token = jwt.sign({ userId: user._id }, 'zgA7WBpR0EnH1L9M', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });

    }
});
// Get a specific landlord by ID
router.get('/:id', async (req, res) => {
    const landlord = await Landlord.findById(req.params.id);
    res.send(landlord);
});

// Create a new landlord
router.post('/', async (req, res) => {
    const landlord = new Landlord(req.body);
    await landlord.save();
    res.send(landlord);
});

// Update a specific landlord by ID
router.put('/:id', async (req, res) => {
    const landlord = await Landlord.findByIdAndUpdate(req.params.id, req.body);
    res.send(landlord);
});

// Delete a specific landlord by ID
router.delete('/:id', async (req, res) => {
    await Landlord.findByIdAndDelete(req.params.id);
    res.send('Landlord deleted successfully');
});

module.exports = router;
