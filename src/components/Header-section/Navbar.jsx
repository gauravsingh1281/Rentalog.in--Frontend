import logo from "../../assets/Images/logo.png";
import { FiUser } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex justify-between items-center py-4 px-12">
        <Link to="home" smooth={true} duration={500}>
          <img src={logo} alt="Rentalog-logo" />
        </Link>

        <ul className="flex">
          <li className="nav-links mr-5 p-3 ">
            <Link to="home" smooth={true} duration={500}>
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
          <li className="nav-links  p-3">
            <Link to="dashboard" smooth={true} duration={500}>
              {" "}
              DASHBOARD
            </Link>
          </li>
        </ul>
        <ul className="user-cta flex">
          <li className="mr-5 p-3">Login</li>
          <li className=" p-3">
            <FiUser className="mr-1" />
            Register
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
