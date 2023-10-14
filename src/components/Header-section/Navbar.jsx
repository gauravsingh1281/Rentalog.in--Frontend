import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import MenuIcon from "../../assets/Icons/menu-icon.png";
import logo from "../../assets/Images/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar flex justify-between items-center py-4 px-4 md:py-4 md:px-12">
        <img className="logo" src={logo} alt="Rentalog-logo" />
        <ul className="hidden md:flex">
          <li className="nav-links mr-5 p-3 ">HOME</li>
          <li className="nav-links mr-5 p-3">ABOUT</li>
          <li className="nav-links mr-5 p-3">CONTACT</li>
          <li className="nav-links  p-3">RENTALS</li>
        </ul>
        <ul className="user-cta hidden md:flex">
          <Link to="/login">
            <li className="mr-5 p-2 md:p-3">Login</li>
          </Link>
          <Link to={"/register"}>
            {" "}
            <li className=" p-2 md:p-3">
              <FiUser className="mr-1" />
              Register
            </li>
          </Link>
        </ul>
        <img className="menu-icon md:hidden" src={MenuIcon} alt="Menu-icon" />
      </nav>
    </>
  );
};
export default Navbar;
