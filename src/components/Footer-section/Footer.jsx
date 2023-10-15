import logo from "../../assets/Images/logo.png";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
let date=new Date();
let year=date.getFullYear();
const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center justufy-between bg-primaryGreen text-textWhite md:px-[75px] px-[25px] py-[60px] md:flex-row flex-col">
        <div className="w-[300px] flex-1">
          <img
            className="bg-[white] px-1 rounded-xl mb-2 w-64"
            src={logo}
            alt="logo"
          />
          <p className="py-2 w-[280px]">
            Rentalog is the ultimate solution for landlords looking to simplify
            their rent management process.{" "}
          </p>
          <hr className="w-[150px] py-2" />
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="flex space-x-3 pt-2">
            <a href="https://twitter.com/gauravsingh1281">
              <FaTwitter className="w-8 h-8 " />
            </a>
            <a href="https://github.com/gauravsingh1281">
              <FaGithub className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/gauravsingh1281">
              <FaInstagram className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="flex-1 ">
          <h3 className="font-semibold pb-4">Services</h3>
          <ul>
            <li>Property Listing</li>
            <li>Track Payment record</li>
            <li>Rent Calculation</li>
            <li>Time Management</li>
          </ul>
        </div>
        <div className="flex-1">
          <ul>
            <li className="font-semibold">Home</li>
            <li className="font-semibold">About Us</li>
            <li className="font-semibold">Contact Us</li>
            <li className="font-semibold">Rentals</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="bg-black text-textWhite text-center py-2">
          © <span>{year}</span> || All Rights Reserved ||
          The Virtual World Maker
        </p>
      </div>
    </footer>
  );
};

export default Footer;
