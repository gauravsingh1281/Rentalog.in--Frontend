import React, { useState,useEffect } from 'react';
import { FaClock, FaTools, FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import RentNavbar from '@/components/Header-section/RentNavbar';
import Footer from '@/components/Footer-section/Footer';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RentNavbar />
      <div className="flex flex-col md:flex-row items-center justify-center h-screen text-center bg-gray-100 text-gray-900 p-6 md:space-x-20 mt-[55px]">

        <div className="md:w-1/2 flex justify-center">
          <img src="src\assets\Images\comingsoon.png" alt="Coming Soon" className="max-w-full h-auto rounded-lg" />
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg border border-gray-200 md:w-1/2">
          <FaClock className="text-5xl text-customRed mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Coming Soon</h1>
          <p className="text-lg text-gray-700 mb-6">We're working hard to bring you something amazing. Stay tuned!</p>
          <FaTools className="text-5xl text-customRed mx-auto mb-6" />

          {!submitted ? (
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="email"
                placeholder="Enter your email to get notified"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-primaryGreen text-textWhite text-lg font-medium p-3 rounded-lg mt-4 hover:bg-blue-600 transition"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <p className="text-lg text-blue-600 font-semibold">Thank you! We will notify you when the page is ready.</p>
          )}

          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-gray-900 hover:text-gray-700 transition" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-gray-900 hover:text-gray-700 transition" />
            </a>
            <a href="mailto:someone@example.com">
              <FaEnvelope className="text-3xl text-gray-900 hover:text-gray-700 transition" />
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ComingSoon;
