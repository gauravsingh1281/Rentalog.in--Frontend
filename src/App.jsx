import React, { useEffect, useState } from "react";
import "./App.css";  // Ensure this file includes the custom cursor styles
import { Home, Login, Registration, Dashboard } from "./pages"; // Import your pages
import AddNewRental from "./components/dashboard-components/AddNewRental/AddNewRental";
import SearchRental from "./components/dashboard-components/SearchRental-section/SearchRental";
import RenterDetails from "./components/dashboard-components/RenterDetails/RenterDetails";
import PaymentsRecord from "./components/dashboard-components/PaymentsRecord/PaymentsRecord";
import TotalRentCollected from "./components/dashboard-components/TotalRentCollected/TotalRentCollected";
import PropertyListing from "./components/dashboard-components/PropertyListing/PropertyListing";
import ListedProperty from "./components/dashboard-components/ListedProperty/ListedProperty";
import CreateNewRental from "./components/dashboard-components/CreateNewRental/CreateNewRental";
import Contributors from "./components/Contributors-page/Contributors";
import ForgotPassword from "./pages/ForgotPassword";
import AdminDashboard from "./components/Admin-Dashboard/AdminDashboard";
import PrivacyPolicy from "./components/Privacy-Policy/PrivacyPolicy";
import TermsConditions from "./components/Terms-Conditions/TermsConditions";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [hovering, setHovering] = useState(false);

  // Mouse move event to update cursor position and create trailing dots
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const handleMouseMove = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
      createTrailingDot(e.clientX, e.clientY);
    };

    const handleMouseOver = () => setHovering(true);
    const handleMouseOut = () => setHovering(false);

    // Add event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);
    
    // Add hover listeners for buttons and links
    document.querySelectorAll('button, a, input, textarea').forEach((element) => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('button, a, input, textarea').forEach((element) => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  const createTrailingDot = (x, y) => {
    const dot = document.createElement("div");
    dot.classList.add("trail-dot");
    document.body.appendChild(dot);

    // Set the position of the dot
    dot.style.top = `${y}px`;
    dot.style.left = `${x}px`;

    // Remove the dot after the animation completes
    setTimeout(() => {
      dot.remove();
    }, 1000);
  };

  return (
    <div>
      {/* Custom animated cursor */}
      <div className={`cursor ${hovering ? "hover" : ""}`}></div>

      {/* Define your routes/pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/searchrenter" element={<SearchRental />} />
        <Route path="/dashboard/createnewrenter" element={<CreateNewRental />} />
        <Route path="/dashboard/addnewrenter" element={<AddNewRental />} />
        <Route path="/dashboard/renterdetails" element={<RenterDetails />} />
        <Route path="/dashboard/paymentsrecord" element={<PaymentsRecord />} />
        <Route path="/Contributors" element={<Contributors />} />
        <Route path="/dashboard/totalrentcollected" element={<TotalRentCollected />} />
        <Route path="/dashboard/propertylisting" element={<PropertyListing />} />
        <Route path="/dashboard/listedproperty" element={<ListedProperty />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms-Conditions" element={<TermsConditions />} />
      </Routes>
    </div>
  );
};

export default App;
