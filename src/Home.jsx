import AboutUs from "./components/AboutUs-section/AboutUs";
import Contact from "./components/Contact-section/Contact";

import Header from "./components/Header-section/Header";
import Services from "./components/Services-section/Services-section";

import PropTypes from "prop-types";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
    <Contact />
    </div>
  );
};

Home.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Home;
