import { useState } from "react";

const Form = () => {
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
      validationContactErrors.lastName = "last name is required";
    }
    if (!contactForm.email.trim()) {
      validationContactErrors.email = "email is required";
    }
    if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      validationContactErrors.email = "email is not valid";
    }
    if (!contactForm.message.trim()) {
      validationContactErrors.message = "message is required";
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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 md:px-4">
          <div className="flex justify-between gap-2">
            <input
              type="text"
              name="firstName"
              id=""
              placeholder="First Name"
              onChange={handlechange}
              className="placeholder-text"
            />
            <span className="pl-4 text-[#ff0000] text-sm">
              {contactErrors.firstName}
            </span>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handlechange}
              className="placeholder-text"
            />
            <span className="pl-4 text-[#ff0000] text-sm">
              {contactErrors.lastName}
            </span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Write yout Email here"
            onChange={handlechange}
            className="placeholder-text"
          />
          <span className="pl-4 text-[#ff0000] text-sm">
            {contactErrors.email}
          </span>
          <textarea
            name="message"
            cols="30"
            rows="10"
            onChange={handlechange}
            className="placeholder-text"
            placeholder="Your Massege"
          ></textarea>
          <span className="pl-4 text-[#ff0000] text-sm">
            {contactErrors.message}
          </span>
          <button
            className="bg-primary-green rounded-2xl w-[100px] p-3 font-semibold text-text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
