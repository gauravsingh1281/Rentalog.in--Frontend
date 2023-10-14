import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import MenuIcon from "../../assets/Icons/menu-icon.png";
import CloseIcon from "../../assets/Icons/close-icon.png";
import logo from "../../assets/Images/logo.png";
const Navbar = () => {
  let isOpen= false;
  const Toggle = () =>{
    isOpen = !isOpen
    isOpen ? document.getElementById('nav').classList.remove('hidden')
     : document.getElementById('nav').classList.add('hidden')
  }
  return (
    <>
      <nav className="navbar flex top-0 left-0 bg-green flex-column fixed z-10 md:w-screen flex-wrap md:flex-row justify-between items-center py-4 md:py-4 md:px-12">
        <div className="md:inline  mx-5 flex flex-row justify-between items-center">
        <img onClick={Toggle}  className="menu-icon  md:hidden" src={MenuIcon} alt="Menu-icon" />
        <img className="logo" src={logo} alt="Rentalog-logo" />
        </div>
        <ul id="nav" className="h-screen hidden fixed z-10 top-0 w-screen p-20 bg-green  md:bg-transparent md:p-1 md:w-auto  md:z-auto md:h-auto md:static  md:flex">
        <img onClick={Toggle}  className="menu-icon absolute top-5 left-5 w-0.5 md:hidden" src={CloseIcon} alt="Menu-icon" />
        <img className="logo  md:hidden" src={logo} alt="Rentalog-logo" />
          <li className="nav-links text-textWhite md:text-textBlack mr-5 p-3 ">HOME</li>
          <li className="nav-links text-textWhite md:text-textBlack mr-5 p-3">ABOUT</li>
          <li className="nav-links text-textWhite md:text-textBlack mr-5 p-3">CONTACT</li>
          <li className="nav-links text-textWhite md:text-tetBlack  p-3">RENTALS</li>
        </ul>
        <ul className="user-cta flex flex-row inline-block m-auto md:flex">
          <Link to="/login">
            <li className="mr-5 p-1 my-2 md:p-3">Login</li>
          </Link>
          <li className=" p-1 my-2  md:p-3">
            <FiUser className="mr-1" />
            Register
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
