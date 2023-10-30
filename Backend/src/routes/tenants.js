const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Get a list of all tenants
router.get('/', async (req, res) => {
    const tenants = await Tenant.find();
    res.send(tenants);
});

router.post('/tenants_registration', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await Tenant.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User with this email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newTenant = new Tenant({
            name,
            email,
            password: hashedPassword,
        });
        await newTenant.save();
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }

});

router.post('tenants_login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const tenant = await tenant.findOne({ email });
        if (!tenant) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const passwordMatch = await bcrypt.compare(password, tenant.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' })
        }

    } catch (error) {
        res.status(500).json({ message: 'Internal Server error' });

    }
})

// Get a specific tenant by ID
router.get('/:id', async (req, res) => {
    const tenant = await Tenant.findById(req.params.id);
    res.send(tenant);
});



// Create a new tenant
router.post('/', async (req, res) => {
    const tenant = new Tenant(req.body);
    await tenant.save();
    res.send(tenant);
});

// Update a specific tenant by ID
router.put('/:id', async (req, res) => {
    const tenant = await Tenant.findByIdAndUpdate(req.params.id, req.body);
    res.send(tenant);
});

// Delete a specific tenant by ID
router.delete('/:id', async (req, res) => {
    await Tenant.findByIdAndDelete(req.params.id);
    res.send('Tenant deleted successfully');
});

module.exports = router;
