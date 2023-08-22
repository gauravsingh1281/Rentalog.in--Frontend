import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer-section/Footer";
import Header from "./components/Header-section/Header";
import Connect from "./components/connectUs-section/Connect";
import AboutUs from "./components/AboutUs-section/AboutUs";
import Services from "./components/Services-section/Services-section";
import Dashboard from "./components/Admin-Dashboard/Dashboard";
import Navbar from "./components/Header-section/Navbar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Navbar click={handleOpen} />
      <Header />
      <AboutUs />
      <Services />
      <Connect />

      <Dashboard onClose={handleClose} open={isOpen} />

      <Footer />
    </>
  );
};

export default App;
