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
