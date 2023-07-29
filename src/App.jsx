import "./App.css";
import Contact from "./components/Contact-section/Contact";
import Header from "./components/Header-section/Header";
import Footer from "./components/Footer-section/Footer";
import AboutUs from "./components/AboutUs-section/AboutUs";
import Services from "./components/Services-section/Services-section";


const App = () => {
  return (
    <>
      <Header />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
