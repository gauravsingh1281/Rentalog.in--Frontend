import { FiUser } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { useState, useEffect } from "react";
import GoogleTranslate from "./GoogleTranslate";
import gsap from 'gsap'
const tl = gsap.timeline()

const Navbar = () => {
  const [showMenu, setShowMenu] = useState("");
  const [doBlure, setDoBlure] = useState(false);
  const [navLinkbgColor, setNavlinkbgColor] = useState(true);
  const [activeSection, setActiveSection] = useState("home"); // Track active section
  const sectionIds = ["home", "Service", "AboutUs", "ContactUs"]; // Section IDs

  useEffect(() => {
    const tl = gsap.timeline();  // Initialize the timeline

    const ctx = gsap.context(() => {
      tl.fromTo('.navbar',
        {
          y: -100, // Starting position (from)
          opacity: 0, // Starting opacity (from)
        },
        {
          y: 0, // Ending position (to)
          opacity: 1, // Ending opacity (to)
          duration: 1, // Animation duration
          ease: "power2.inOut", // Easing function
          stagger: 0.3, // Stagger the animations for smoother effect
        }
      );
      tl.fromTo('.navbar2',
        {
          y: -100, // Starting position (from)
          opacity: 0, // Starting opacity (from)
        },
        {
          y: 0, // Ending position (to)
          opacity: 1, // Ending opacity (to)
          duration: 0.5, // Animation duration
          ease: "power2.inOut", // Easing function
          stagger: 0.3, // Stagger the animations for smoother effect
        }
      );
      tl.fromTo('.navbar3',
        {
          y: -100, // Starting position (from)
          opacity: 0, // Starting opacity (from)
        },
        {
          y: 0, // Ending position (to)
          opacity: 1, // Ending opacity (to)
          duration: 0.5, // Animation duration
          ease: "power2.inOut", // Easing function
          stagger: 0.3, // Stagger the animations for smoother effect
        }
      );

    });

    return () => ctx.revert(); // Cleanup when the component unmounts
  }, []);



  // Intersection Observer to Highlight Links on Scroll and Update URL
  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActiveSection = entry.target.id;
            setActiveSection(newActiveSection);

            // Update the URL without reloading the page
            if (window.location.hash !== `#${newActiveSection}`) {
              window.history.replaceState(null, null, `#${newActiveSection}`);
            }
          }
        });
      },
      {
        threshold: 0.9, // Reduce the threshold to detect sections earlier
        rootMargin: "0px 0px -50% 0px", // Adjust root margin to highlight as sections enter
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Fallback for "home" section when near top of the page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveSection("home");
        window.history.replaceState(null, null, "#home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      setDoBlure(window.pageYOffset <= 30);
    };
    window.addEventListener("scroll", scrollHandler);

    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  if (showMenu) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    }; 
  } else {
    window.onscroll = () => { };
  }

  return (

    <nav className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 shadow-lg fixed w-full z-20 top-0 left-0 transition-all duration-300 ease-in-out">
  <div
    className={
      doBlure
        ? `absolute w-full h-full -z-20 bg-[#c0e8ff] opacity-0`
        : `absolute w-full h-full -z-20 bg-[#c0e1ff] opacity-80`
    }
  ></div>

  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex flex-row justify-center items-center">
      <a href="#home" aria-current="page">
        <img
          className="self-start w-40 navbar my-auto hover:scale-110 transition-transform duration-300"
          src={logo}
          alt="Rentalog-logo"
        />
      </a>
    </div>
    <div className="flex md:order-2 items-center space-x-4">
      <Link to="/login">
        <button
          type="button"
          className="navbar3 hidden md:block font-bold rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0 transition-transform duration-300 hover:scale-110 hover:bg-green-500 hover:text-white shadow-md"
        >
          Login
        </button>
      </Link>
      <GoogleTranslate />
    </div>

    <div className="hidden md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-row lg:gap-10 md:gap-6 font-medium">
        {['home', 'Service', 'AboutUs', 'ContactUs'].map((section, index) => (
          <li
            key={index}
            className="navbar2 hover:scale-105 transition-transform duration-300 hover:text-green-500"
          >
            <a href={`#${section}`} aria-current="page">
              <h1 className={`${activeSection === section ? 'text-green-500' : ''}`}>
                {section.toUpperCase()}
              </h1>
            </a>
          </li>
        ))}
      </ul>
    </div>

    <button
      onClick={() => setShowMenu('show')}
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 transition duration-300"
      aria-controls="navbar-sticky"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  </div>
</nav>


  );
};

export default Navbar;
