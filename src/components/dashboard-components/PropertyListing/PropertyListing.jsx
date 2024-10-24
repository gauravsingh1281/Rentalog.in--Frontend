import React from "react";
import { useEffect } from "react";
// Sample properties data
const properties = [
  {
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
    title: "Cozy Family Home",
    description:
      "A beautiful and spacious 3-bedroom family home with a backyard.",
    price: "$1,500",
    beds: 3,
    baths: 2,
  },
  {
    imageUrl:
      "https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172194515.jpg",
    title: "Modern Apartment",
    description:
      "A sleek modern apartment in the city center with amazing views.",
    price: "$2,300",
    beds: 2,
    baths: 2,
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/41/30/5c/41305cb2f8391620d046a2a3518a7a35.jpg",
    title: "Luxury Villa",
    description: "A luxurious 5-bedroom villa with a swimming pool and garden.",
    price: "$5,800",
    beds: 5,
    baths: 4,
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.tOrydk5j46G7kWuS1elhsgHaE8?rs=1&pid=ImgDetMain",
    title: "City Penthouse",
    description: "An exclusive penthouse with panoramic views of the city.",
    price: "$8,200",
    beds: 4,
    baths: 3,
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.KfJQ1mYTxHgLaCTlsjO4bwHaE8?rs=1&pid=ImgDetMain",
    title: "Beachfront Condo",
    description: "A stylish condo directly on the beachfront.",
    price: "$3,200",
    beds: 2,
    baths: 2,
  },
];

// PropertyCard Component
const PropertyCard = ({ property }) => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{property.title}</h2>
        <p className="text-gray-600 mt-2">{property.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-600 font-semibold">{property.price}</span>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>{property.beds} beds</span>
            <span>{property.baths} baths</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <a href="/" className="text-2xl font-bold text-gray-800">
          MyProperties
        </a>
        <div className="space-x-6">
          <a href="#" className="text-gray-800 hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition">
            Listings
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

// PropertyListing Component
const PropertyListing = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center my-8">
          Property Listings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
