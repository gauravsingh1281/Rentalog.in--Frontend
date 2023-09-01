import AboutUs from "./components/AboutUs-section/AboutUs";
import Connect from "./components/connectUs-section/Connect";
import Dashboard from "./components/Admin-Dashboard/Dashboard";
import Header from "./components/Header-section/Header";
import Services from "./components/Services-section/Services-section";

import PropTypes from "prop-types";

const Home = ({ isOpen, onClose }) => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <Connect />
    </div>
  );
};

Home.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Home;
