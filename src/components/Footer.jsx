import logo from "../assets/logo.png"
import {FaTwitter, FaGithub, FaInstagram} from "react-icons/fa"

const Footer = () =>{
    return (
        
        <div>
            <div>
             <div className="bg-primary-green text-text-white">
                <img src={logo} alt="logo" />
                <p>Rentalog is the ultimate solution for landlords looking to simplify their rent management process. </p>
                <hr />
                <h3>Contact Us</h3>
                <div>
                <FaTwitter />
                <FaGithub />
                <FaInstagram />
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
        <div>
            <p className="bg-black text-text-white text-center py-2">Copywrite © 2023 reserved</p>
        </div>
        </div>
        
    )
}

export default Footer;