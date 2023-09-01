import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer-section/Footer";
import Navbar from "./components/Header-section/Navbar";
import { Routes, Route } from "react-router-dom";
import AddRenter from "./components/Admin-Dashboard/AddRenter";
import Home from "./Home";
import Dashboard from "./components/Admin-Dashboard/Dashboard";
import RenterDetails from "./components/Admin-Dashboard/RenterDetails";
import PropertyListing from "./components/Admin-Dashboard/PropertyListing";
import RenterPaymentRecords from "./components/Admin-Dashboard/RenterPaymentRecords";
import SearchRenter from "./components/Admin-Dashboard/SearchRenter";
import TotalRentCollected from "./components/Admin-Dashboard/TotolRentCollected";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log("clicked");
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Navbar click={handleOpen} />
      <Dashboard onClose={handleClose} open={isOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-renter" element={<AddRenter />} />
        <Route path="/renter-details" element={<RenterDetails />} />
        <Route path="/property-listing" element={<PropertyListing />} />
        <Route
          path="/renter-payment-records"
          element={<RenterPaymentRecords />}
        />
        <Route path="/search-renter" element={<SearchRenter />} />
        <Route path="/total-rent-collected" element={<TotalRentCollected />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
