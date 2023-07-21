import "./App.css";
import Footer from "./components/Footer-section/Footer";
import Header from "./components/Header-section/Header";
import Connect from "./components/connectUs-section/Connect";
import AboutUs from "./components/AboutUs-section/AboutUs";
import Services from "./components/Services-section/Services-section";
import "./App.css";
import Contact from "./components/Header-section/Contact-section/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Services />
      <AboutUs />
      <Connect />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
