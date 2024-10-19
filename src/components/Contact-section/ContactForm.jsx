import React, { useState } from "react"; // Import useState and React
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/instagram.png";
import Twitter from "../../assets/Social-Icons/Twitter.png";
import "./Contact-section.css";
import TickIcon from "../../assets/Icons/tick.png"; // Adjust path if necessary
// Adjust the path as needed

// Set the modal app element for accessibility
Modal.setAppElement("#root"); // Replace '#root' with your app's root element if different

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal

  const onSubmit = (data) => {
    // Open the modal on form submission
    setModalIsOpen(true);
    console.log(data);
    reset(); // reset form fields after submission
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <section className="flex flex-col md:flex-row gap-y-10 my-20">
        {/* Right hand side of the form */}
        <article className="flex flex-1 justify-center p-5 md:p-0 md:mr-24">
          <form onSubmit={handleSubmit(onSubmit)} className="gap-x-5 w-full">
            {/* Form fields */}
            <div className="flex flex-col md:flex-row mb-6 justify-between">
              <div className="flex flex-col md:w-6/12">
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="border-2 border-green rounded-lg text-green-dark h-16 mb-6 md:mb-0 placeholder-textBlack p-2"
                  placeholder="First name"
                  aria-label="First name"
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
                  className="border-2 border-green rounded-lg h-16 text-green-dark placeholder-textBlack p-2"
                  placeholder="Last name"
                  aria-label="Last name"
                />
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.lastName && errors.lastName.message}
                </span>
              </div>
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
                  aria-label="Email"
                />
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.email && errors.email.message}
                </span>
              </div>
            </div>

            <textarea
              {...register("message", {
                required: "Message is required",
              })}
              className="border-2 border-green rounded-lg w-full h-40 text-green-dark placeholder-textBlack p-2"
              placeholder="Your message here"
              aria-label="Message"
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
            </div>
          </form>
        </article>

        {/* Optional: Add social icons */}
      </section>

      {/* Modal for confirmation message */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="flex flex-col items-center">
          <img src={TickIcon} alt="Success" className="w-12 h-12 mb-4" />{" "}
          {/* Adjust size as needed */}
          <h2 className="text-lg font-bold">Message Sent!</h2>
          <p>Your message has been sent successfully. Thank you!</p>
          <button
            onClick={closeModal}
            className="bg-green text-white p-2 rounded mt-4"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ContactForm;
