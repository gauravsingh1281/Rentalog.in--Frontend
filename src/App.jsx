import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer-section/Footer";
import Navbar from "./components/Header-section/Navbar";
import { Routes, Route } from "react-router-dom";
import AddRenter from "./components/Admin-Dashboard/AddRenter";
import Home from "./pages/Home";
import Dashboard from "./components/Admin-Dashboard/Dashboard";
import RenterDetails from "./components/Admin-Dashboard/RenterDetails";
import PropertyListing from "./components/Admin-Dashboard/PropertyListing";
import RenterPaymentRecords from "./components/Admin-Dashboard/RenterPaymentRecords";
import SearchRenter from "./components/Admin-Dashboard/SearchRenter";
import TotalRentCollected from "./components/Admin-Dashboard/TotolRentCollected";
import Login from "./pages/Login"
import Contact from "./components/Contact-section/Contact";
import AboutUs from "./components/AboutUs-section/AboutUs";
import Services from "./components/Services-section/Services-section";
const App = () => {
  return (
    <>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
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
}


export default App;
