import { useState } from "react";
import logo from "../../assets/Images/logo.png";
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin ,} from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let date = new Date();
let year = date.getFullYear();

const Footer = () => {
  const [email, setEmail] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);
  const handleRating = (star) => {
    setRating(star); // Ensure this is correctly setting the state
  };

  // const handleSubmit = (event) => {
  //   try {
  //     event.preventDefault();
  //     console.log(email);
  //     setEmail("");
  //   } catch (error) {
  //     console.log(`Error with newsletter input: ${error}`);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert("❌ Please enter a valid email address."); // Alert for invalid email
      return;
    }

    console.log(email); // Log the valid email
    alert("🙏 Thank you for subscribing to our newsletter!"); // Alert for successful submission
    setEmail(""); // Clear input after submission
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message || rating === 0) {
      alert("All fields and a rating are required!");
      return;
    }
    const formData = { name, email, message, rating };
    try {
      console.log("Submitting feedback", formData);
      setSubmitStatus("success");
    } catch (error) {
      console.error("Error sending feedback:", error);
      setSubmitStatus("error");
    }
  };

  const openModal = () => {
    setSubmitStatus(null);
    setShowModal(true);
    setName("");
    setEmail("");
    setMessage("");
    setRating(0);
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-[#4facfe] via-[#1a8c7c] to-[#ff006e] text-textWhite px-5 py-2">
      <div className="flex justify-center flex-wrap gap-10">
        <div className="flex  justify-center items-center text-center lg:items-start lg:text-start basis-[200px] mx-5 my-2">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="my-2 pb-1">
              Rentalog is the ultimate solution for landlords looking to
              simplify their rent management process.
            </p>
            <img
              className="bg-[white] mx-auto lg:mx-0 hover:cursor-pointer px-1 rounded-xl mb-2 h-[40px] w-[150px] hover:shadow-l hover:scale-105 transition duration-300 ease-in-out"
              src={logo}
              alt="logo"
            />
          </div>
        </div>

        <div className="flex  justify-center items-center text-center lg:items-start lg:text-start basis-[150px] mx-5 my-2">
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul>
              <Link to="/dashboard/propertylisting">
                <li className="hover:scale-110 transition duration-300 ease-in-out">
                  Property Listing
                </li>
              </Link>

              <Link to="#">
                <li className="hover:scale-110 transition duration-300 ease-in-out">
                  Track Payment Record
                </li>
              </Link>
              <Link to="/dashboard/totalrentcollected">
                <li className="hover:scale-110 transition duration-300 ease-in-out">
                  Rent Calculation
                </li>
              </Link>
              <Link to="/comingsoon">
                <li className="hover:scale-110 transition duration-300 ease-in-out">
                  Coming Soon
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center font-medium text-center lg:items-start lg:text-start basis-[150px] mx-5 my-2">
          <div>
            <h3 className="font-bold mb-4">Important Links</h3>
            <ul>
              <li className="hover:scale-110 transition duration-300 ease-in-out">
                <a href="/">Home</a>
              </li>
              <li className="hover:scale-110 transition duration-300 ease-in-out">
                <a href="#AboutUs">About Us</a>
              </li>
              <li className="hover:scale-110 transition duration-300 ease-in-out">
                <a href="#ContactUs">Contact Us</a>
              </li>
              <li className="hover:scale-110 transition duration-300 ease-in-out">
                <a href="#Service">Rentals</a>
              </li>
              <li className="hover:scale-110 transition duration-300 ease-in-out">
                <Link to="/Contributors">Contributors</Link>
              </li>

              {/* <button
                onClick={openModal}
                className="hover:scale-110 transition duration-300 ease-in-out"
              >
                Feedback
              </button> */}

              <li className="hover:scale-110 transition duration-300 ease-in-out">
                <Link to="/Privacy-Policy">Privacy & Policy</Link>
              </li>
              <li className="hover:scale-110 transition duration-300 ease-in-out">
                <Link to="/Terms-Conditions">Terms & Conditions</Link>
              </li>
              <li className="hover:scale-110 transition duration-300 ease-in-out">
                <Link to="/Feedback">Feedback</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center text-center lg:items-start lg:text-start basis-[150px] mx-5 my-2">
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mt-4 text-sm font-[300]">
              Subscribe to our{" "}
              <span className="font-bold text-justify">Newsletter</span> for
              latest updates and offers!
            </p>
            <div className="flex flex-row items-center space-x-4 mt-4 relative">
              <input
                type="email"
                id="newsletter"
                maxLength={35}
                value={email}
                placeholder="Enter Email..."
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                className="text-[#090303] text-sm font-[500] p-2 rounded-md focus:outline-none focus:ring"
              />
              <button
                onClick={handleSubmit}
                className="absolute right-1 p-2 bg-[#1ABC9C] text-white rounded-md hover:bg-gray-dark hover:text-[#1abc9c] hover:border hover:border-[#1abc9c] transition duration-3 ease-in-out"
              >
                <LuSendHorizonal />
              </button>
            </div>

            <div className="flex gap-4 mt-2 justify-center">
              <a href="https://twitter.com/gauravsingh1281">
                <RiTwitterXFill className="w-6 h-6 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:text-[#1DA1F2]" />
              </a>
              <a href="https://github.com/gauravsingh1281">
                <FaGithub className="w-6 h-6 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:text-black" />
              </a>
              <a href="https://www.instagram.com/gauravsingh1281">
                <FaInstagram className="w-6 h-6 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:text-[#FF69B4]" />
              </a>
              <a href="https://www.instagram.com/gauravsingh1281">
                <FaFacebook className="w-6 h-6 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:text-[#FF69B4]" />
              </a>
              <a href="https://www.instagram.com/gauravsingh1281">
                <FaDiscord className="w-6 h-6 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:text-[#FF69B4]" />
              </a>
              <a href="https://www.instagram.com/gauravsingh1281">
                <FaLinkedin className="w-6 h-6 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:text-[#FF69B4]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
      <hr className="my-1 mx-10 border-1 border-t border-gray-light" />

      <div className=" self-center text-center">
        {" "}
        {year} || All Rights Reserved || The Virtual World Maker
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-[#2ec4b6] p-6 rounded-lg w-full max-w-lg">
            {submitStatus === null ? (
              <>
                <h2 className="text-2xl font-bold mb-4 text-black">Feedback</h2>
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <div>
                    <label
                      className="block text-gray-700 text-black"
                      text-black
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded text-black"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded text-black"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-black">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded text-black"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-black">
                      Rate Us
                    </label>
                    <div className="flex text-2xl text-black">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`cursor-pointer ${
                            rating >= star ? "text-yellow-400" : "text-gray-400"
                          }`}
                          onClick={() => handleRating(star)}
                        >
                          {rating >= star ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-black"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center ">
                {submitStatus === "success" ? (
                  <div>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-500 text-5xl mb-4 text-red"
                    />
                    <p className="text-lg font-bold text-black">
                      Feedback Submitted
                    </p>
                  </div>
                ) : (
                  <div>
                    <FontAwesomeIcon
                      icoFn={faTimesCircle}
                      className="text-red-500 text-5xl mb-4"
                    />
                    <p className="text-lg font-bold text-black">
                      Failed to Submit
                    </p>
                  </div>
                )}
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 mt-4 border-gray-300 rounded text-blackhover:bg-blue-600 text-black "
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
