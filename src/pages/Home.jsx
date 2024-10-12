import AboutUs from "../components/AboutUs-section/AboutUs";
import Contact from "../components/Contact-section/Contact";
import Footer from "../components/Footer-section/Footer";
import Header from "../components/Header-section/Header";
import Services from "../components/Services-section/Services-section";
import Testimonials from "../components/testimonial-section/Testimonial";
import { ScrollToTop } from 'react-simple-scroll-up';
import carImg3 from "../assets/Icons/arrow-up.png"

function Home() {
  return (
    <>
      <Header />
      <Services />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop
        symbol={
          <img src={carImg3} alt="" style={{ width: "80px" }} />
        }
        size={
          80
        }
        bgColor="rgb(256,256,256)"
        strokeWidth={10}
        strokeFillColor="rgb(113, 242, 214)"
        strokeEmptyColor="rgb(256,256,256)"

      />
    </>
  );
}

export default Home;
