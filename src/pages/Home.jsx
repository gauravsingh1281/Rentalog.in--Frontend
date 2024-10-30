import AboutUs from "../components/AboutUs-section/AboutUs";
import Contributors from "../components/Contributors-page/Contributors";
import Contact from "../components/Contact-section/Contact";
import FAQ from "../components/faq/FAQ";

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

      <FAQ/>
      <Footer />

      {/* <Contributors /> */}

      <ScrollToTop
        symbol={
          <img
            src={carImg3}
            alt=""
            style={{
              width: "60px",
              marginTop: "60px",
              bottom: "60px",
              right: "20px",
            }}
          />
        }
        size={60}
        bgColor="rgb(256,256,256)"
        strokeWidth={10}
        strokeFillColor="rgb(113, 242, 214)"
        strokeEmptyColor="rgb(256,256,256)"
      />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
