import { FiUser, FiSun, FiMoon } from "react-icons/fi"; // Import the icons
import { FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { useState, useEffect } from "react";
import GoogleTranslate from "./GoogleTranslate";
import gsap from "gsap";
import ProgressBar from "./ProgressBar";
import clickSound from "../../assets/mixkit-mouse-click-close-1113.wav";

const Navbar = () => {
  const [dark, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState("");
  const [checkToken, setCheckToken] = useState(false);

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("dark", newMode ? "true" : "false");
      return newMode;
    });
    document.body.classList.toggle("dark", !dark);
  };

  useEffect(() => {
    const getToken = localStorage.getItem("userToken");
    if (getToken != null || getToken != undefined) {
      setCheckToken(true);
    }
  }, []);

  const handleLogout = () => {
    playSound(); // Play sound effect on logout
    localStorage.removeItem("userToken");
    localStorage.setItem("isAuthenticated", "false");
    setCheckToken(false);
  };

  return (
    <nav className="fixed w-screen z-20 top-0 left-0 backdrop-blur-lg">
      <ProgressBar />
      <div className="max-w-screen-xl w-50 flex items-center justify-between mx-auto p-2 text-sm">
        <div className="flex flex-row items-center">
          <a href="#home" aria-current="page">
            <img
              className="self-start navbar my-auto"
              style={{ height: "70px", width: "15rem" }}
              src={logo}
              alt="Rentalog-logo"
            />
          </a>
        </div>

        {/* Nav Items for desktop*/}
        <div className={`hidden lg:block`}>
          <div className={` flex space-x-4 `}>
            <a className="cursor-pointer hover:scale-105 " href="/">
              Home
            </a>
            <a className="cursor-pointer hover:scale-105 " href="#Service">
              Rentals
            </a>
            <a className="cursor-pointer hover:scale-105 " href="#AboutUs">
              About
            </a>
            <a className="cursor-pointer hover:scale-105 " href="#ContactUs">
              Contact
            </a>
          </div>
        </div>

        {/* Nav Items for mobile*/}
        <div
          className={`${showMenu === "show" ? "fixed" : "hidden"} top-20 left-0 w-full bg-textBlack text-textWhite h-screen z-10 p-4`}
        >
          <div className={` flex flex-col space-y-6 `}>
            <a
              className="cursor-pointer hover:scale-105 "
              href="/"
              onClick={() => setShowMenu("")}
            >
              Home
            </a>
            <a
              className="cursor-pointer hover:scale-105 "
              href="#Service"
              onClick={() => setShowMenu("")}
            >
              Rentals
            </a>
            <a
              className="cursor-pointer hover:scale-105 "
              href="#AboutUs"
              onClick={() => setShowMenu("")}
            >
              About
            </a>
            <a
              className="cursor-pointer hover:scale-105 "
              href="#ContactUs"
              onClick={() => setShowMenu("")}
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <button onClick={toggleDarkMode} className="text-lg">
            {dark ? <FiSun /> : <FiMoon />}
          </button>

          {checkToken ? (
            <Link to="/">
              <button
                onClick={handleLogout}
                className="navbar3 hidden md:block text-sm px-4 py-1 rounded-lg bg-green-500 text-white transition-transform hover:scale-105"
              >
                Logout
              </button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button
                  onClick={playSound}
                  className="navbar3 hidden md:block text-sm px-4 py-1 rounded-lg bg-green-500 text-white transition-transform hover:scale-105"
                >
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  onClick={playSound}
                  className="navbar3 hidden md:flex items-center gap-1 px-4 py-1 text-sm rounded-lg bg-green-500 text-white transition-transform hover:scale-105"
                >
                  <FiUser className="text-lg" />
                  Register
                </button>
              </Link>
            </>
          )}

          <GoogleTranslate />
        </div>

        <button
          onClick={() =>
            showMenu === "show" ? setShowMenu("") : setShowMenu("show")
          }
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
