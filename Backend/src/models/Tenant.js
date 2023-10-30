const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    contact_information: String,
    emergency_contact_information: String,
    employment_information: String,
    credit_history: String,
    lease_start_date: Date,
    lease_end_date: Date,
    rental_property_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RentalProperty',
    },
});

const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
