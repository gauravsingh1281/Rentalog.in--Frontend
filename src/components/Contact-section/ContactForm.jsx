import { useState } from "react";
import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/instagram.png";
import X from "../../assets/Social-Icons/X.png";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [contactErrors, setContactErrors] = useState({});

  const handlechange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationContactErrors = {};
    if (!contactForm.firstName.trim()) {
      validationContactErrors.firstName = "First name is required";
    }
    if (!contactForm.lastName.trim()) {
      validationContactErrors.lastName = "Last name is required";
    }
    if (!contactForm.email.trim()) {
      validationContactErrors.email = "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      validationContactErrors.email = "Email is not valid";
    }
    if (!contactForm.message.trim()) {
      validationContactErrors.message = "Message is required";
    }
    setContactErrors(validationContactErrors);

    if (Object.keys(validationContactErrors).length === 0) {
      alert("Message sent successfully");
      setContactForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <>
      <section className="flex flex-col md:flex-row  gap-y-10 my-20">
        {/* left hand side of the form */}
        <article className="flex-1 text-center md:text-left md:ml-24">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-wider mb-10 font-monsterrat text-textBlack">
            Connect with <span className="text-customRed">Us</span>
          </h2>
          <div
            className="flex gap-x-12 justify-center md:justify-start"
            style={{ height: "min-content", alignItems: "baseline" }}
          >
            <a href="https://twitter.com/gauravsingh1281">
              <img src={X} alt="X-logo" className="h-14 w-14" />
            </a>
            <a href="https://github.com/gauravsingh1281">
              <img src={Github} alt="Github-logo" className="h-14 w-14" />
            </a>
            <a href="https://www.instagram.com/gauravsingh1281">
              <img src={Insta} alt="Insta-logo" className="h-14 w-14" />
            </a>
          </div>
        </article>
        {/* Right hand side of the form */}
        <article className="flex flex-1 justify-center p-5 md:p-0 md:mr-24">
          <form onSubmit={handleSubmit} className="gap-x-5 w-full">
            <div className="flex flex-col md:flex-row mb-6 justify-between">
              <div className="flex flex-col md:w-6/12">
                <input
                  name="firstName"
                  value={contactForm.firstName}
                  className="border-2 border-green rounded-lg text-green-dark h-16  mb-6 md:mb-0 placeholder-textBlack p-2"
                  placeholder="First name"
                  style={{ marginRight: "5px" }}
                  onChange={handlechange}
                />
                <span className="pl-4 text-[#ff0000] text-sm">
                  {contactErrors.firstName}
                </span>
              </div>
              <div className="flex flex-col md:w-6/12">
                <input
                  className="border-2 border-green rounded-lg h-16  text-green-dark  placeholder-textBlack p-2"
                  placeholder="Last name"
                  name="lastName"
                  value={contactForm.lastName}
                  onChange={handlechange}
                />
                <span className="pl-4 text-[#ff0000] text-sm">
                  {contactErrors.lastName}
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mb-6 justify-between">
              <div className="flex flex-col w-full">
                <input
                  className="border-2 border-green rounded-lg h-16 text-green-dark placeholder-textBlack p-2"
                  placeholder="Email"
                  name="email"
                  value={contactForm.email}
                  onChange={handlechange}
                />
                <span className="pl-4 text-[#ff0000] text-sm">
                  {contactErrors.email}
                </span>
              </div>
            </div>

            <textarea
              className="border-2 border-green rounded-lg w-full h-40 text-green-dark placeholder-textBlack p-2"
              placeholder="Your message here"
              name="message"
              value={contactForm.message}
              onChange={handlechange}
            />
            <span className="pl-4 text-[#ff0000] text-sm">
              {contactErrors.message}
            </span>
            <div className="flex justify-center md:justify-start ">
              <button
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
