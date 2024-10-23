import AboutUs from "../components/AboutUs-section/AboutUs";
import Contact from "../components/Contact-section/Contact";
import FAQ from "../components/faq/FAQ";

import Footer from "../components/Footer-section/Footer";
import Header from "../components/Header-section/Header";
import Services from "../components/Services-section/Services-section";
import ScrollToTop from "react-scroll-to-top";
import Testimonials from "../components/testimonial-section/Testimonial";

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
      <ScrollToTop
        smooth
        color="darkgreen"
        className="flex justify-center hover:scale-125 duration-200 transition items-center p-1"
      />
    </>
  );
}

export default Home;
