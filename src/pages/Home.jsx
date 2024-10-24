import { useEffect, useState } from "react";
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
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const handleMouseMove = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;

      // Create trailing dots
      createTrailingDot(e.clientX, e.clientY);
    };

    const handleMouseOver = () => setHovering(true);
    const handleMouseOut = () => setHovering(false);

    // Add event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);
    
    // Add hover listeners for buttons and links
    document.querySelectorAll('button, a, input, textarea').forEach((element) => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('button, a, input, textarea').forEach((element) => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  const createTrailingDot = (x, y) => {
    const dot = document.createElement("div");
    dot.classList.add("trail-dot");
    document.body.appendChild(dot);

    // Set the position of the dot
    dot.style.top = `${y}px`;
    dot.style.left = `${x}px`;

    // Remove the dot after the animation completes
    setTimeout(() => {
      dot.remove();
    }, 1000); // The same duration as the animation
  };

  return (
    <>
      {/* Custom animated cursor */}
      <div className={`cursor ${hovering ? "hover" : ""}`}></div>

      <Header />
      <Services />
      <AboutUs />
      <Testimonials />
      <Contact />
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
      <Footer />
    </>
  );
}

export default Home;
