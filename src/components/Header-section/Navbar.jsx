import { FiUser, FiSun, FiMoon } from "react-icons/fi"; // Import the icons
import { FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { useState, useEffect } from "react";
import GoogleTranslate from "./GoogleTranslate";
import gsap from "gsap";
const tl = gsap.timeline();
import "../Header-section/Navbar.css";
import gsap from 'gsap'
import ProgressBar from "./ProgressBar";
const tl=gsap.timeline()
import '../Header-section/Navbar.css'
import gsap from "gsap";
import ProgressBar from "./ProgressBar";
const tl = gsap.timeline();
import "../Header-section/Navbar.css";
 

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false); // Track theme state
  const [showMenu, setShowMenu] = useState("");
  const [doBlure, setDoBlure] = useState(false);
  const [navLinkbgColor, setNavlinkbgColor] = useState(true);
  const [activeSection, setActiveSection] = useState("home"); // Track active section
  const [checkToken, setCheckToken] = useState(false);
  const sectionIds = ["home", "Service", "AboutUs", "ContactUs", "FAQ"]; // Section IDs

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    const tl = gsap.timeline(); // Initialize the timeline

    const ctx = gsap.context(() => {
      tl.fromTo(
        ".navbar",
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
      tl.fromTo(
        ".navbar2",
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
      tl.fromTo(
        ".navbar3",
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
 
      tl.fromTo('.navbar',
      tl.fromTo(
        ".navbar",
 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.inOut", stagger: 0.3 }
      );
      tl.fromTo(
        ".navbar2",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut", stagger: 0.3 }
      );
      tl.fromTo(
        ".navbar3",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut", stagger: 0.3 }
      );
    });
    var getToken = localStorage.getItem("userToken");
    if (getToken != null || getToken != undefined) {
      setCheckToken(true);
    }
    return () => ctx.revert();
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
            if (window.location.hash !== `#${newActiveSection}`) {
              window.history.replaceState(null, null, `#${newActiveSection}`);
            }
          }
        });
      },
      { threshold: 0.9, rootMargin: "0px 0px -50% 0px" }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () =>
      sections.forEach((section) => section && observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveSection("home");
        window.history.replaceState(null, null, "#home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      setDoBlure(window.pageYOffset <= 30);
    };
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  if (showMenu) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);

    return (
      <div className="md:hidden bg-[#1ABC9C] fixed w-full z-20 top-0 left-0 h-full flex justify-center items-center">
        <ProgressBar />
        <button
          onClick={() => setShowMenu("")}
          className="absolute top-0 left-0 m-[1.5rem]"
        >
          <FiX className="m-2 text-textWhite text-lg" />
        </button>
        {/* Other elements */}
      </div>
    );
  } else {
    window.onscroll = () => {};
  }

  return (
    <nav className={`fixed w-full z-20 top-0 left-0 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} transition-colors duration-500`}>
      <ProgressBar/>
 
        <div
          className={
            doBlure
              ? `absolute w-full h-full -z-20 bg-gray-light opacity-0`
              : `absolute w-full h-full -z-20 bg-gray-light opacity-80`
          }
        ></div>

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
          <div className="flex flex-row justify-center items-center">
            <a href="#home" aria-current="page">
              <img
                className="self-start navbar my-auto logo-hover"  
                src={logo}
                alt="Rentalog-logo"
              />
            </a>
          </div>

          <div className="flex md:order-2 items-center">
 
            {/* Login Button */}
            <Link to="/login">
 
 
      <div className={doBlure ? `absolute w-full h-full -z-20 bg-gray-light opacity-0` : `absolute w-full h-full -z-20 bg-gray-light opacity-80`}></div>
  const handleLogout = () => {
    // Clear session data (e.g., token from localStorage)
    localStorage.removeItem("userToken");
    setCheckToken(false)
    // Redirect to login page
    navigate("/");
  };
  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} transition-colors duration-500`}
    >
      <ProgressBar />

      <div
        className={
          doBlure
            ? `absolute w-full h-full -z-20 bg-beige `
            : `absolute w-full h-full -z-20 bg-beige `
        }
      ></div>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2 text-sm">
        {/* Logo on the Left */}
        <div className="flex flex-row items-center">
          <a href="#home" aria-current="page">
            <img
              className="self-start w-36 navbar my-auto"
              src={logo}
              alt="Rentalog-logo"
            />
          </a>
        </div>
 

        {/* Center Navigation Links */}
        <ul className="hidden md:flex items-center gap-4 text-sm font-light">
          {sectionIds.map((section) => (
            <li
              className="hover:scale-[1.05] transition duration-300"
              key={section}
            >
              <a href={`#${section}`}>
                <h1 className={activeSection === section ? "text-green" : ""}>
                  {section.toUpperCase()}
                </h1>
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Login, Register, and GoogleTranslate */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button onClick={toggleDarkMode} className="text-lg">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
 
 
                     {/* Login Button */}
                     <Link to="/login">

 
              <button
                type="button"
                className="navbar3 hidden md:block button-3d font-bold rounded-lg text-lg px-6 py-3 text-center button-spacing transition-all duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg hover:scale-105 hover:bg-green-600 hover:shadow-2xl relative"
              >
                Login
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-white transition-all duration-500 ease-in-out hover:w-full rounded-md"></span>
              </button>
            </Link>

            {/* Register Button */}
            <Link to="/register">
              <button
                type="button"
                className="navbar3 hidden md:flex items-center gap-2 button-3d font-bold rounded-lg text-lg px-6 py-3 text-center bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg hover:scale-105 hover:bg-green-600 hover:shadow-2xl relative"
              >
                <FiUser className="text-2xl transition duration-300 hover:text-green-300 hover:scale-110" />
                <span className="flex items-center">Register</span>
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-white transition-all duration-500 ease-in-out hover:w-full rounded-md"></span>
              </button>
            </Link>
            <GoogleTranslate/>
            </div>
          <div className="hidden md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-row lg:gap-10 md:gap-6 font-medium">
              <li className=" navbar2 hover:scale-[1.081] hover transition duration-300">
                <a href="#home"  aria-current="page">
                  {activeSection === "home" ? <h1 className="text-green">HOME</h1> : <h1>HOME</h1>}
                </a>
              </li>
 

            <GoogleTranslate />
          </div>

 
          <div
            className="hidden md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-row lg:gap-10 md:gap-6 font-medium">
              {sectionIds.map((section, index) => (
                <li
                  key={index}
                  className="navbar2 hover:scale-105 transition duration-300 relative group"
                >
                  <a href={`#${section}`} aria-current="page">
                    <h1
                      className={`transition-all duration-300 ${
                        activeSection === section
                          ? "text-green"
                          : "hover:text-green-400"
                      }`}
                    >
                      {section.toUpperCase()}
                    </h1>
                  </a>
                  {/* Animated Single Underline */}
                  <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-green group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </li>
              ))}
 
              <li className="navbar2 hover:scale-[1.081] hover transition duration-300">
                <a href="#ContactUs" aria-current="page">
                  {activeSection === "ContactUs" ? <h1 className="text-green">CONTACT</h1> : <h1>CONTACT</h1>}
                </a>
              </li>
              <li className="hover:scale-[1.081] hover transition duration-300">
                <a href="#FAQ" aria-current="page">
                  {activeSection === "FAQ" ? <h1 className="text-green">FAQ</h1> : <h1>FAQ</h1>}
                </a>
              </li>
              
 
            </ul>
            
          </div>
          <button
            onClick={() => {
              setShowMenu("show");
            }}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
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
 

          {checkToken ? (
            <Link to="/">
              <button onClick={handleLogout} className="navbar3 hidden md:block text-sm px-4 py-1 rounded-lg bg-green-500 text-white transition-transform hover:scale-105">
              Logout
              </button>
            </Link>
          ) : (
            <>
            <Link to="/login">
              <button className="navbar3 hidden md:block text-sm px-4 py-1 rounded-lg bg-green-500 text-white transition-transform hover:scale-105">
                Login
              </button>
            </Link>
            <Link to="/register">
            <button className="navbar3 hidden md:flex items-center gap-1 px-4 py-1 text-sm rounded-lg bg-green-500 text-white transition-transform hover:scale-105">
              <FiUser className="text-lg" />
              Register
            </button>
          </Link>
          <GoogleTranslate/>

          </>
          )}
          
          <GoogleTranslate />
 
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMenu("show")}
          type="button"
          className="md:hidden p-2"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
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
