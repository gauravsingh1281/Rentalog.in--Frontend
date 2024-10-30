import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";
import { ContactText } from "./ContactText";
import "./Contact-section.css";
import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/instagram.png";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';


const Contact = () => {
  return (
    <section className="flex flex-col w-full  px-[5%] gap-10 justify-center">
      <header id="ContactUs" className="flex justify-center align-middle mt-20">
        <h1 className="text-5xl font-bold tracking-wider text-text-black font-monsterrat">
          Contact Us
        </h1>
      </header>
      <main className=" mt-0 flex flex-wrap lg:gap-[5%] gap-[20px] justify-center items-center">
        <ContactText />
        <ContactForm />
      </main>
      <h2 className="text-5xl text-center font-bold tracking-wider  font-monsterrat text-textBlack">
        Connect with <span className="text-customRed">Us</span>
      </h2>
      <div className="md:flex items-center justify-between">
        <div className="flex items-center justify-center p-0  md:w-1/2">
          <article className="flex flex-col items-center text-center ">
          <div className="flex gap-[27px] justify-center">

  <a href="https://twitter.com/gauravsingh1281" className="group">
    <RiTwitterXFill 
      className="md:h-12 h-10 w-auto text-black transition-transform duration-300 ease-in-out transform group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg"
    />
  </a>

  <a href="https://github.com/gauravsingh1281" className="group">
    <FaGithub 
      className="text-6xl md:h-12 h-10 transition-transform duration-300 ease-in-out transform group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg"
    />
  </a>

  <a href="https://www.instagram.com/gauravsingh1281" className="group">
    <img 
      src={Insta} 
      alt="Insta-logo" 
      className="md:h-12 h-10 transition-transform duration-300 ease-in-out transform group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg"
    />
  </a>
</div>
            <div className="mt-4">
              <p className="font-semibold">Get in touch :</p>
              <p>
                Email:
                <a
                  href="mailto:support@rentalog.in"
                  className="ml-1 font-bold text-primaryGreen underline"
                >
                  support@rentalog.in
                </a>
              </p>
              <p>
                Phone:
                <a
                  href="tel:+916201577047"
                  className="ml-1 font-bold text-primaryGreen underline"
                >
                  +91 62015 77047
                </a>
              </p>
              <p>
                Address: Shaktinagar, Sonebhadra <br /> UP, 231222
              </p>
            </div>
          </article>
        </div>
        <div className="  md:w-1/2">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;