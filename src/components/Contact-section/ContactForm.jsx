import { useForm } from "react-hook-form";
<link rel="stylesheet" href="Contact-section.css" />
import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/instagram.png";
import Twitter from "../../assets/Social-Icons/Twitter.png";
import React, { useState } from "react";
import "./ContactSection.css"; // If you have external CSS

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // Define state variables for the form fields and error messages
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    messageError: "",
  });

  const onSubmit = (data) => {
    alert("Message sent successfully");
    console.log(data);
    reset(); // reset form fields after submission
    
  // Validation and form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    const newErrors = {};

    if (!firstName) {
      newErrors.firstNameError = "First name is required";
      isValid = false;
    } else {
      newErrors.firstNameError = "";
    }

    if (!lastName) {
      newErrors.lastNameError = "Last name is required";
      isValid = false;
    } else {
      newErrors.lastNameError = "";
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!email || !emailPattern.test(email)) {
      newErrors.emailError = "Email is not valid";
      isValid = false;
    } else {
      newErrors.emailError = "";
    }

    if (!message) {
      newErrors.messageError = "Message is required";
      isValid = false;
    } else {
      newErrors.messageError = "";
    }

    // Update error messages
    setErrors(newErrors);

    if (isValid) {
      alert("Message sent successfully");
      // Reset form fields after submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }
  };

 return (
    <>
      <section className="flex flex-col md:flex-row  gap-y-10 my-20">
        {/* Left hand side of the form */}
        {/* Right hand side of the form */}
        <article className="flex flex-1 justify-center p-5 md:p-0 md:mr-24">
          <form onSubmit={handleSubmit(onSubmit)} className="gap-x-5 w-full">
            <div className="flex flex-col md:flex-row mb-6 justify-between">
              <div className="flex flex-col md:w-6/12">
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="border-2 border-green rounded-lg text-green-dark h-16 mb-6 md:mb-0 placeholder-textBlack p-2"
                  placeholder="First name"
                  style={{ marginRight: "5px" }}
                />
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.firstName && errors.firstName.message}
                </span>
              </div>
              <div className="flex flex-col md:w-6/12">
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="border-2 border-green rounded-lg h-16  text-green-dark  placeholder-textBlack p-2"
                  placeholder="Last name"
                />
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.lastName && errors.lastName.message}
                </span>
              </div>
    <section className="flex-container">
      <article className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-container">
              <input
                type="text"
                className="form-input"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <span className="error-message">{errors.firstNameError}</span>
            </div>
            <div className="flex flex-col md:flex-row mb-6 justify-between">
              <div className="flex flex-col w-full">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Email is not valid",
                    },
                  })}
                  className="border-2 border-green rounded-lg h-16 text-green-dark placeholder-textBlack p-2"
                  placeholder="Email"
                />
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.email && errors.email.message}
                </span>
              </div>
            <div className="input-container">
              <input
                type="text"
                className="form-input"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <span className="error-message">{errors.lastNameError}</span>
            </div>
          </div>

            <textarea
              {...register("message", {
                required: "Message is required",
              })}
              className="border-2 border-green rounded-lg w-full h-40 text-green-dark placeholder-textBlack p-2"
              placeholder="Your message here"
            />
            <span className="pl-4 text-[#ff0000] text-sm">
              {errors.message && errors.message.message}
            </span>
            <div className="flex justify-center md:justify-start">
              <button
                className="relative flex cursor-pointer items-center justify-center mt-5 bg-green rounded-lg w-40 lg:w-60 p-3 text-textWhite text-2xl md:text-xl font-bold font-monsterrat ease-in-out duration-300 hover:bg-[transparent] hover:text-green hover:border-green hover:border-[2px]"
                type="submit"
              >
                Submit
              </button>
          <div className="form-group">
            <div className="input-container">
              <input
                type="email"
                className="form-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="error-message">{errors.emailError}</span>
            </div>
          </form>
        </article>
      </section>
    </>
        </div>

          <textarea
            className="form-input"
            placeholder="Your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <span className="error-message">{errors.messageError}</span>

          <div className="submit-btn-container">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default ContactForm;
