import "./App.css";
import Contact from "./components/Contact-section/Contact";
import Header from "./components/Header-section/Header";
import Footer from "./components/Footer-section/Footer";
import AboutUs from "./components/AboutUs-section/AboutUs";
import Services from "./components/Services-section/Services-section";
import Testimonial from "./components/testimonial-section/Testimonial";


const App = () => {
  return (
    <>
      <Header />
      <Services />
      <AboutUs />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
