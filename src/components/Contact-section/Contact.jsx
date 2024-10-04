import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";
import { ContactText } from "./ContactText";
import "./Contact-section.css";
import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/instagram.png";
import Twitter from "../../assets/Social-Icons/Twitter.png";

const Contact = () => {
  return (
    <section className="flex flex-col w-full px-[5%] gap-10 justify-center">
      <header id="ContactUs" className="flex justify-center align-middle mt-20">
        <h1 className="text-5xl font-bold tracking-wider text-text-black font-monsterrat">
          Contact Us
        </h1>
      </header>
      <main className="flex flex-wrap lg:gap-[5%] gap-[20px] justify-center items-center">
        <div className="contact-box flex flex-col md:flex-row lg:gap-[5%] gap-[20px] justify-center items-center">
          <ContactText />
          <ContactForm />
        </div>
      </main>
      <div className="flex items-center justify-center p-0">
        <article className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-wider mb-10 font-monsterrat text-textBlack">
            Connect with <span className="text-customRed">Us</span>
          </h2>
          <div className="flex gap-[27px] flex-wrap justify-center md:justify-start md:ml-20">
            <a href="https://twitter.com/gauravsingh1281">
              <img src={Twitter} alt="Twitter-logo" className="h-14" />
            </a>
            <a href="https://github.com/gauravsingh1281">
              <img src={Github} alt="Github-logo" className="h-14" />
            </a>
            <a href="https://www.instagram.com/gauravsingh1281">
              <img src={Insta} alt="Insta-logo" className="h-14" />
            </a>
          </div>
        </article>
      </div>
      <GoogleMap />
    </section>
  );
};

export default Contact;
