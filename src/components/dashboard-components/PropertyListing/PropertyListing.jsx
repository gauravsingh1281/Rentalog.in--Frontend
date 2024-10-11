
/*
const PropertyListing = () => {
    return(
        <>
        <h1>Property Listing</h1>
        </>
    )
}

export default PropertyListing;
*/


import React from "react";


// Sample properties data
const properties = [
  {
    imageUrl:'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg',
    title: "Cozy Family Home",
    description: "A beautiful and spacious 3-bedroom family home with a backyard.",
    price: "$1,500",
    beds: 3,
    baths: 2,
  },
  {
    imageUrl: "https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172194515.jpg",
    title: "Modern Apartment",
    description: "A sleek modern apartment in the city center with amazing views.",
    price: "$2,300",
    beds: 2,
    baths: 2,
  },
  {
    imageUrl: "data:image/jpeg;base64,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",
    title: "Luxury Villa",
    description: "An exquisite villa with luxurious amenities and a private pool.",
    price: "$5,000",
    beds: 5,
    baths: 4,
  },
  // Add more properties as needed
];

// Single Property Card Component
const PropertyCard = ({ property }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white border border-black m-4">
      <img
        className="w-full h-48 object-cover"
        src={property.imageUrl}
        alt={property.title}
      />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">{property.title}</div>
        <p className="text-gray-700 text-base">{property.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {property.price}/month
        </span>
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {property.beds} Beds
        </span>
        <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {property.baths} Baths
        </span>
      </div>
    </div>
  );
};

// Property Listing Page
const PropertyListing = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Property Listings</h1>
      <div className="flex flex-wrap justify-center">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <PropertyListing />
    </div>
  );
};

export default App;

