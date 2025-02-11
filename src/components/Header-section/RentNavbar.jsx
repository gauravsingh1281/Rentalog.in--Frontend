import { FiUser, FiSun, FiMoon } from "react-icons/fi"; // Import the icons
import {} from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/Images/logo.png";
import { useState } from "react";
import GoogleTranslate from "./GoogleTranslate";
import gsap from "gsap";
import ProgressBar from "./ProgressBar";
// const tl=gsap.timeline()
import "../Header-section/Navbar.css";

const RentNavbar = ({ darkMode, toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState("");
  const [doBlure, setDoBlure] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track active section

  if (showMenu) {

    return (
      <>
        <div className="md:hidden bg-[#1ABC9C] fixed w-full z-20 top-0 left-0 h-full flex justify-center items-center">
          <ProgressBar/>
          <button
            // onClick={() => {
            //   setShowMenu("");
            // }}
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
                //   onClick={() => {
                //     setShowMenu("");
                //   }}
                >
                  HOME
                </div>
              </a>

              <a href="#Service" aria-current="page">
                <div
                  className="text-textWhite "
                //   onClick={() => {
                //     setShowMenu("");
                //   }}
                >
                 
                </div>
              </a>
              <a href="#AboutUs" aria-current="page">
                <div
                  className="text-textWhite "
                //   onClick={() => {
                //     setShowMenu("");
                //   }}
                >
                  ABOUT
                </div>
              </a>
              <a href="#ContactUs" aria-current="page">
                <div
                  className="text-textWhite "
                //   onClick={() => {
                //     setShowMenu("");
                //   }}
                >
                  CONTACT
                </div>
              </a>
              <a href="#FAQ" aria-current="page">
                <div
                  className="text-textWhite"
                //   onClick={() => {
                //     setShowMenu("");
                //   }}
                >
                 FAQ
                </div>
              </a>
              <a href="/" aria-current="page">
                <div
                  className="text-textWhite"
                //   onClick={() => {
                //     setShowMenu("");
                //   }}
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
  } 

  return (
    <>
      <nav
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        } fixed w-full z-20 top-0 left-0 transition-colors duration-500`}
      >
        <ProgressBar />

        <div
          className={
            doBlure
              ? `absolute w-full h-full -z-20 bg-gray-light opacity-0`
              : `absolute w-full h-full -z-20 bg-gray-light opacity-80`
          }
        ></div>

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex flex-row justify-center items-center">
            <a href="/#home" aria-current="page">
              <img
                className="self-start w-40 navbar my-auto"
                src={logo}
                alt="Rentalog-logo"
              />
            </a>
          </div>
          <div className="flex md:order-3 items-center">
            {/* <button onClick={toggleDarkMode} className="mr-4 text-2xl">
              {darkMode ? <FiSun /> : <FiMoon />}
            </button> */}

            {/* Login Button */}
            <div>
              <Link to="/login">
                <button
                  type="button"
                  className="navbar3 hidden md:block button-3d font-bold rounded-lg text-lg px-6 py-3 text-center button-spacing transition-all duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg hover:scale-105 hover:bg-green-600 hover:shadow-2xl relative"
                >
                  Login
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-white transition-all duration-500 ease-in-out hover:w-full rounded-md"></span>
                </button>
              </Link>
            </div>
            <div>
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
            </div>
            <div>
              <GoogleTranslate />
            </div>
          </div>
          <div
            className="hidden md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-row lg:gap-10 md:gap-6 font-medium">
              <li className=" navbar2 hover:scale-[1.081] hover transition duration-300">
              <HashLink smooth to="/#home" aria-current="page">
                  {activeSection === "home" ? (
                    <h1 className="text-green">HOME</h1>
                  ) : (
                    <h1>HOME</h1>
                  )}
                </HashLink>
              </li>

              <li className="navbar2 hover:scale-[1.081] hover transition duration-300">
              <HashLink smooth to="/#Service" aria-current="page">
                  {activeSection === "Service" ? (
                    <h1 className="text-green">RENTALS</h1>
                  ) : (
                    <h1>RENTALS</h1>
                  )}
                </HashLink>
              </li>

              <li className="navbar2 hover:scale-[1.081] hover transition duration-300">
              <HashLink smooth to="/#AboutUs" aria-current="page">
                  {activeSection === "AboutUs" ? (
                    <h1 className="text-green">ABOUT</h1>
                  ) : (
                    <h1>ABOUT</h1>
                  )}
                </HashLink>
              </li>

              <li className="navbar2 hover:scale-[1.081] hover transition duration-300">
              <HashLink smooth to="/#ContactUs" aria-current="page">
                  {activeSection === "ContactUs" ? (
                    <h1 className="text-green">CONTACT</h1>
                  ) : (
                    <h1>CONTACT</h1>
                  )}
                </HashLink>
              </li>
              <li className="hover:scale-[1.081] hover transition duration-300">
              <HashLink smooth to="/#FAQ" aria-current="page">
                  {activeSection === "FAQ" ? (
                    <h1 className="text-green">FAQ</h1>
                  ) : (
                    <h1>FAQ</h1>
                  )}
                </HashLink>
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

export default RentNavbar;
