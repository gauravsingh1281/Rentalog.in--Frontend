import AboutUs from "../components/AboutUs-section/AboutUs";
import Contact from "../components/Contact-section/Contact";
import Footer from "../components/Footer-section/Footer";
import Header from "../components/Header-section/Header";
import Services from "../components/Services-section/Services-section";

function Home() {
  return (
    <>
      <Header />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
