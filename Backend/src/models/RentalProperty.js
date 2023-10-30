const rentalPropertySchema = new mongoose.Schema({
    address: String,
    location: {
        city: String,
        state: String,
        zipCode: String,
    },
    property_type: String,
    number_of_bedrooms: Number,
    number_of_bathrooms: Number,
    rent_amount: Decimal,
    amenities: [String],
    photos: [String],
    landlord_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Landlord',
    },
    status: String,
});


const RentalProperty = mongoose.model('RentalProperty', rentalPropertySchema);

/* 
The status field can be a string with the following possible values:

available - The property is available for rent.
unavailable - The property is not available for rent.
pending - The property is pending rental.
rented - The property is currently rented. 

amenities like : 
Laundry facilities
Parking
Swimming pool
Gym
Air conditioning
Dishwasher
Washer and dryer
Balcony or patio
Yard
Pet-friendly
*/