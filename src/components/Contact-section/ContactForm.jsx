import { useState } from "react";
import "./Contact-section.css"; // Ensure this path is correct
import FirstNameIcon from "../../assets/icons/first-name-icon.png"; // Replace with your actual path
import EmailIcon from "../../assets/icons/email-icon.png"; // Replace with your actual path
import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/instagram.png";
import Twitter from "../../assets/Social-Icons/Twitter.png";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    email: "",
  });

  const [contactErrors, setContactErrors] = useState({});

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationContactErrors = {};
    if (!contactForm.firstName.trim()) {
      validationContactErrors.firstName = "First name is required";
    }
    if (!contactForm.email.trim()) {
      validationContactErrors.email = "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      validationContactErrors.email = "Email is not valid";
    }
    
    setContactErrors(validationContactErrors);

    if (Object.keys(validationContactErrors).length === 0) {
      alert("Message sent successfully");
      setContactForm({
        firstName: "",
        email: "",
      });
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row gap-y-10 my-20">
        {/* Left hand side of the form */}
        {/* Right hand side of the form */}
        <article className="flex flex-1 justify-center p-5 md:p-0 md:mr-24">
          <form onSubmit={handleSubmit} className="gap-x-5 w-full">
            <div className="flex flex-col mb-6 justify-between">
              <div className="flex flex-col w-full relative">
                <img src={FirstNameIcon} alt="First Name Icon" className="absolute left-3 top-4 w-5 h-5" />
                <input
                  name="firstName"
                  value={contactForm.firstName}
                  className="border-2 border-green rounded-lg text-green-dark h-16 pl-10 mb-6 placeholder-textBlack p-2"
                  placeholder="First name"
                  onChange={handleChange}
                />
                <span className="pl-4 text-[#ff0000] text-sm">
                  {contactErrors.firstName}
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full relative">
              <img src={EmailIcon} alt="Email Icon" className="absolute left-3 top-4 w-5 h-5" />
              <input
                className="border-2 border-green rounded-lg h-16 text-green-dark pl-10 placeholder-textBlack p-2"
                placeholder="Email"
                name="email"
                value={contactForm.email}
                onChange={handleChange}
              />
              <span className="pl-4 text-[#ff0000] text-sm">
                {contactErrors.email}
              </span>
            </div>

            <div className="flex justify-center md:justify-start ">
              <button
                id="text"
                className="relative flex cursor-pointer items-center justify-center mt-5 bg-green rounded-lg w-40 lg:w-60 p-3 text-textWhite text-2xl md:text-xl font-bold font-monsterrat ease-in-out duration-300 hover:bg-[transparent] hover:text-green hover:border-green hover:border-[2px]"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default ContactForm;
