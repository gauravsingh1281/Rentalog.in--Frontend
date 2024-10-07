import "../Header-section/Header-section.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="header-section mb-[80px]">
        <Navbar />
        <div className="header-text-container">
          <div className="header-text top-[15%] sm:top-[23%]">
            <h1>
              Welcome to <span className="highlighted">Rentalog</span>
            </h1>
            <p>
              Rentalog is the ultimate solution for landlords looking to simplify
              their rent management process. Easily track personal details, payment history, and more.
            </p>
            <Link to="/register">
              <button className="btn">
                Get Started
                <span className="btn-icon">→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
