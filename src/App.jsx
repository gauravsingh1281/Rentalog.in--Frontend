import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer-section/Footer";
import Navbar from "./components/Header-section/Navbar";
import { Routes, Route } from "react-router-dom";
import AddRenter from "./components/Admin-Dashboard/AddRenter";
import Home from "./Home";
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
      <Routes>
        <Route
          path="/"
          element={<Home isOpen={isOpen} onClose={handleClose} />}
        />
        <Route path="/add-renter" element={<AddRenter />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
