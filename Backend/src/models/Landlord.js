const mongoose = require('mongoose');

const landlordSchema = new mongoose.Schema({
    name: String,
    business_name: String,
    business_address: String,
    tax_id_number: String,
    banking_information: String,
});

const Landlord = mongoose.model('Landlord', landlordSchema);

module.exports = Landlord;
