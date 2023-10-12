import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import MenuIcon from "../../assets/Icons/menu-icon.png";
import logo from "../../assets/Images/logo.png";
const Navbar = () => {
  let isOpen= false;
  const Toggle = () =>{
    isOpen = !isOpen
    isOpen ? document.getElementById('nav').classList.remove('hidden') : document.getElementById('nav').classList.add('hidden')
  }
  return (
    <>
      <nav className="navbar  flex-column md:flex-row justify-between items-center py-4 md:py-4 md:px-12">
        <div className="md:inline md:w-auto w-screen flex-row justify-between items-center">
        <img onClick={Toggle}  className="menu-icon  md:hidden" src={MenuIcon} alt="Menu-icon" />
        <img className="logo" src={logo} alt="Rentalog-logo" />
        </div>
        <ul id="nav" className="h-screen hidden fixed z-10 top-0 w-screen p-20 bg-green md:p-1 md:z-auto md:h-auto md:static  md:flex">
        <img onClick={Toggle}  className="menu-icon md:hidden" src={MenuIcon} alt="Menu-icon" />
        <img className="logo md:hidden" src={logo} alt="Rentalog-logo" />
          <li className="nav-links mr-5 p-3 ">HOME</li>
          <li className="nav-links mr-5 p-3">ABOUT</li>
          <li className="nav-links mr-5 p-3">CONTACT</li>
          <li className="nav-links  p-3">RENTALS</li>
        </ul>
        <ul className="user-cta hidden md:flex">
          <Link to="/login">
            <li className="mr-5 p-2 md:p-3">Login</li>
          </Link>
          <li className=" p-2 md:p-3">
            <FiUser className="mr-1" />
            Register
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
