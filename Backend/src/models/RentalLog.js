const mongoose = require('mongoose');

const rentalLogSchema = new mongoose.Schema({
    date: Date,
    amount: Decimal,
    payment_method: String,
    status: String,
    notes: String,
    tenant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant',
    },
    rental_property_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RentalProperty',
    },
});

const RentalLog = mongoose.model('RentalLog', rentalLogSchema);

module.exports = RentalLog;
/* 
Pending: The payment has been received but has not yet been processed.
Paid: The payment has been processed and is complete.
Late: The payment is past due.
NSF: The payment was not sufficient funds.
Returned: The payment was returned for some reason (e.g., the tenant's bank account was closed).*/