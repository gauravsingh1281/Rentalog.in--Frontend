import { FiUser } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Link ,useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState("");
  const [doBlure, setDoBlure] = useState(false);
  const [navLinkbgColor , setNavlinkbgColor] = useState(true)

  let url =useLocation()
  url=url.hash.slice(1)
  console.log(url)


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



  if(showMenu){

    const scrollTop = 
            window.pageYOffset || document.documentElement.scrollTop; 
    const scrollLeft = 
            window.pageXOffset || document.documentElement.scrollLeft 
    window.onscroll = () => {
    window.scrollTo(scrollLeft, scrollTop)
  }

    return(
      <>
      <div className="md:hidden bg-[#1ABC9C] fixed w-full z-20 top-0 left-0 h-full flex justify-center items-center">
          <button
            onClick={() => {
              setShowMenu("");
            }}
            className="absolute top-0 left-0 m-[1.5rem]"
          >
            <FiX className="m-2 text-textWhite"/>
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
              <a href="#home" aria-current="page"><div className="text-textWhite" onClick={() => { setShowMenu('')}}>HOME</div></a>
              <a href="#Service" aria-current="page"><div className="text-textWhite" onClick={() => { setShowMenu('')}}>RENTALS</div></a>
              <a href="#AboutUs" aria-current="page"><div className="text-textWhite" onClick={() => { setShowMenu('')}}>ABOUT</div></a>
              <a href="#ContactUs" aria-current="page"><div className="text-textWhite" onClick={() => { setShowMenu('')}}>CONTACT</div></a>
              <div className="text-gray-dark">
                <Link to="/login">
                  <button
                    type="button"
                    className="flex flex-row justify-center items-center gap-2 font-bold rounded-xl text-md px-6 py-2 text-center bg-textWhite"
                  >
                    <FiUser className="text-2xl"/>
                    Log In
                  </button>
                </Link>
              </div>

              <div className="mt-4 h-[2px] w-600 self-stretch bg-textWhite rounded-full"></div>

              <div className="text-gray-dark">
              <Link to="/register">
            <button
              type="button"
              className="flex flex-row justify-center items-center gap-2 font-bold rounded-xl text-md px-6 py-2 text-center bg-textWhite -mt-4"
            >
              <FiUser className="text-2xl"/>
              Register
            </button>
            </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  else{
    window.onscroll = () => {}
  }

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0">
        <div
          className={
            doBlure
              ? `absolute w-full h-full -z-20 bg-gray-light opacity-0`
              : `absolute w-full h-full -z-20 bg-gray-light opacity-80`
          }
        ></div>

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex flex-row justify-center items-center">
            <img className="self-start w-40 " src={logo} alt="Rentalog-logo" />
          </div>
          <div className="flex md:order-2">
            <Link to="/login">
              <button
                type="button"
                className="hidden md:block font-bold rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0"
              >
                Login
              </button>
            </Link>
            <Link to="/register">
            <button
              type="button"
              className="hidden md:flex flex-row justify-center items-center gap-2 font-bold rounded-xl text-md text-[#262626] px-4 py-2 text-center mr-3 md:mr-0 bg-textWhite"
            >
              <FiUser className="text-2xl"/>
              Register
            </button>
            </Link>
          </div>
          <div
            className="hidden md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-row lg:gap-10 md:gap-6 font-medium">
              <li>
                <a href="#home" aria-current="page" className="hover:text-xl hover:shadow-lg transition duration-300">
                {url=="home"?<h1 className="text-green">HOME</h1>:<h1>HOME</h1>}
                </a>
              </li>
              <li>
                <a href="#Service" aria-current="page" className="hover:text-xl hover:shadow-md transition duration-300">
                {url=="Service"?<h1 className="text-green">RENTALS</h1>:<h1>RENTALS</h1>}
                </a>
              </li>
              <li>
                <a href="#AboutUs" aria-current="page" className="hover:text-xl hover:shadow-md transition duration-300">
                {url=="AboutUs"?<h1 className="text-green">ABOUT</h1>:<h1>ABOUT</h1>}
                </a>
              </li>
              <li>
                <a href="#ContactUs" aria-current="page" className="hover:text-xl hover:shadow-md transition duration-300">
                {url=="ContactUs"?<h1 className="text-green">CONTACT</h1>:<h1>CONTACT</h1>}
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