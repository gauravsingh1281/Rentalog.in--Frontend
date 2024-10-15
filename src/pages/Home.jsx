import AboutUs from "../components/AboutUs-section/AboutUs";
import Contact from "../components/Contact-section/Contact";
import Footer from "../components/Footer-section/Footer";
import Header from "../components/Header-section/Header";
import Services from "../components/Services-section/Services-section";
import ScrollToTop from "react-scroll-to-top";
import Testimonials from "../components/testimonial-section/Testimonial";
import FeedbackPage from "./FeedbackPage";

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
        smooth
        color="darkgreen"
        className="flex justify-center hover:scale-125 duration-200 transition items-center p-1"
      />
      <FeedbackPage/>
    </>
  );
}

export default Home;
