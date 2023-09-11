import logo from "../../assets/Images/logo.png";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MenuIcon from "../../assets/Icons/menu-icon.png";

const Navbar = ({ click }) => {
  return (
    <>
      <nav className="navbar flex justify-between items-center y-4 px-4 md:py-4 md:px-12">
        <Link to="/" smooth={true} duration={500}>
          <img src={logo} alt="Rentalog-logo" />
        </Link>

        <ul className="hidden md:flex">
          <li className="nav-links mr-5 p-3 ">
            <Link to="/" smooth={true} duration={500}>
              HOME
            </Link>
          </li>
          <li className="nav-links mr-5 p-3">
            <Link to="about" smooth={true} duration={500}>
              ABOUT
            </Link>
          </li>
          <li className="nav-links mr-5 p-3">
            <Link to="contact" smooth={true} duration={500}>
              CONTACT
            </Link>
          </li>
          <li className="nav-links  p-3">
            <Link to="rentals" smooth={true} duration={500}>
              RENTALS
            </Link>
          </li>
    
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
        <img className="menu-icon md:hidden" src={MenuIcon} alt="Menu-icon" />
      </nav>
    </>
  );
};
export default Navbar;

Navbar.propTypes = {
  click: PropTypes.func,
};