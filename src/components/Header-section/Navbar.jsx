import { FiUser, FiSun, FiMoon } from "react-icons/fi"; // Import the icons
import { FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { useState, useEffect } from "react";
import GoogleTranslate from "./GoogleTranslate";
import gsap from 'gsap'
import ProgressBar from "./ProgressBar";
const tl=gsap.timeline()
import '../Header-section/Navbar.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false); // Track theme state
  const [showMenu, setShowMenu] = useState("");
  const [doBlure, setDoBlure] = useState(false);
  const [navLinkbgColor, setNavlinkbgColor] = useState(true);
  const [activeSection, setActiveSection] = useState("home"); // Track active section

  const sectionIds = ["home", "Service", "AboutUs", "ContactUs","FAQ"]; // Section IDs

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    // Toggle the dark class on the body element
    document.body.classList.toggle("dark", !darkMode);
  };

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

    return (
      <>
        <div className="md:hidden bg-[#1ABC9C] fixed w-full z-20 top-0 left-0 h-full flex justify-center items-center">
          <ProgressBar/>
          <button
            onClick={() => {
              setShowMenu("");
            }}
            className="absolute top-0 left-0 m-[1.5rem]"
          >
            <FiX className="m-2 text-textWhite" />
          </button>
          <div className="text-textWhite">
            <div className="px-4 bg-textWhite w-fit rounded-xl">
              <img
                className="self-start w-40 "
                src={logo}
                alt="Rentalog-logo"
              />
            </div>

            <div className="mt-4 h-[2px] w-600 bg-textWhite rounded-full"></div>

            <div className="flex flex-col gap-8 justify-center items-center mt-10">
              <a href="#home" aria-current="page">
                <div
                  className="text-textWhite "
                  onClick={() => {
                    setShowMenu("");
                  }}
                >
                  HOME
                </div>
              </a>

              <a href="#Service" aria-current="page">
                <div
                  className="text-textWhite "
                  onClick={() => {
                    setShowMenu("");
                  }}
                >
                 
                </div>
              </a>
              <a href="#AboutUs" aria-current="page">
                <div
                  className="text-textWhite "
                  onClick={() => {
                    setShowMenu("");
                  }}
                >
                  ABOUT
                </div>
              </a>
              <a href="#ContactUs" aria-current="page">
                <div
                  className="text-textWhite "
                  onClick={() => {
                    setShowMenu("");
                  }}
                >
                  CONTACT
                </div>
              </a>
              <a href="#FAQ" aria-current="page">
                <div
                  className="text-textWhite"
                  onClick={() => {
                    setShowMenu("");
                  }}
                >
                 FAQ
                </div>
              </a>
              <a href="#Service" aria-current="page">
                <div
                  className="text-textWhite"
                  onClick={() => {
                    setShowMenu("");
                  }}
                >
                 FAQ
                </div>
              </a>
              <div className="text-gray-dark">
                <Link to="/login">
                  <button
                    type="button"
                    className=" flex flex-row justify-center items-center gap-2 font-bold rounded-xl text-md px-6 py-2 text-center bg-textWhite  transition-transform duration-300 hover:scale-110 hover:text-sky-500"
                  >
                    <FiUser className="text-2xl" />
                    Log In
                  </button>
                </Link>
              </div>

              <div className="mt-4 h-[2px] w-600 self-stretch bg-textWhite rounded-full"></div>

              <div className="text-gray-dark">
                <Link to="/register">
                  <button
                    type="button"
                    className=" flex flex-row justify-center items-center gap-2 font-bold rounded-xl text-md px-6 py-2 text-center bg-textWhite -mt-4"
                  >
                    <FiUser className="text-2xl" />
                    Register
                  </button>
                </Link>
              </div>
              <GoogleTranslate />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    window.onscroll = () => { };
  }

  return (
    <> 
      <nav className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } fixed w-full z-20 top-0 left-0 transition-colors duration-500`}>
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
                  className="self-start w-40 navbar my-auto"
                  src={logo}
                  alt="Rentalog-logo"
                />
            </a>
          </div>
          <div className="flex md:order-2 items-center">

          <button onClick={toggleDarkMode} className="mr-4 text-2xl">
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

              <li className="navbar2 hover:scale-[1.081] hover transition duration-300">
                <a href="#Service" aria-current="page">
                  {activeSection === "Service" ? <h1 className="text-green">RENTALS</h1> : <h1>RENTALS</h1>}
                </a>
              </li>

              <li className="navbar2 hover:scale-[1.081] hover transition duration-300">
                <a href="#AboutUs" aria-current="page">
                  {activeSection === "AboutUs" ? <h1 className="text-green">ABOUT</h1> : <h1>ABOUT</h1>}
                </a>
              </li>

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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
