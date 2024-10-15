import AboutUs from "../components/AboutUs-section/AboutUs";
import Contributors from "../components/Contributors-page/Contributors";
import Contact from "../components/Contact-section/Contact";
import Footer from "../components/Footer-section/Footer";
import Header from "../components/Header-section/Header";
import Services from "../components/Services-section/Services-section";
import Testimonials from "../components/testimonial-section/Testimonial";
import { ScrollToTop } from "react-simple-scroll-up";
import carImg3 from "../assets/Icons/arrow-up.png";
import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <Services />
      <AboutUs />
      <Testimonials />
      <Contact />
      {/* <Contributors /> */}
      <Footer />
      <ScrollToTop
        image={carImg3}
        scrollUpBtnStyle={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#000",
        }}
      />
    </>
  );
}

export default Home;