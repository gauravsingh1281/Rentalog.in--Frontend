/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/Images/logo.png"
import Footer from '../../Footer-section/Footer';
import RentNavbar from '../../Header-section/RentNavbar';
import Navbar from '../../Header-section/Navbar';

const FeatureCard = ({ icon, title, description, darkMode}) => (
  <div className={`${darkMode ? 'bg-black' : 'bg-textWhite'} rounded-lg shadow-md p-6`}>
    <div className="text-[#1abc9c] text-4xl mb-4">{icon}</div>
    <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-textWhite' : 'text-black'}`}>{title}</h3>
    <p className={`text-gray-600 ${darkMode ? 'text-textWhite' : 'text-black'}`}>{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role, darkMode}) => (
  <div className={`${darkMode ? 'bg-black' : 'bg-textWhite'} rounded-lg shadow-md p-6`}>
    <p className={`text-gray-600 italic mb-4 ${darkMode ? 'text-textWhite' : 'text-black'}`}>"{quote}"</p>
    <p className={`font-semibold ${darkMode ? 'text-textWhite' : 'text-black'}`}>{author}</p>
    <p className={`text-sm text-gray-500 ${darkMode ? 'text-textWhite' : 'text-black'}`}>{role}</p>
  </div>
)

const TotalRentCollected = () => {
  const [darkMode, setDarkMode] = useState(false); // Track theme state

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    // Toggle the dark class on the body element
    document.body.classList.toggle("dark", !darkMode);
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="min-h-screen bg-gray-100">
      <RentNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <section className="bg-[#1abc9c] text-textWhite py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Simplify Your Rent Collection</h2>
            <p className="text-xl mb-8">Streamline your property management with our powerful rent collection system</p>
            <Link to="/login"><button className=" bg-textWhite text-[#1abc9c] font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors">
              Get Started
            </button></Link>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon="📊"
                title="Easy Rent Tracking"
                description="Keep track of all your properties and tenants in one place. See who's paid and who's due at a glance."
                darkMode={darkMode}
              />
              <FeatureCard
                icon="🔔"
                title="Automated Reminders"
                description="Send automatic rent reminders to tenants, reducing late payments and saving you time."
                darkMode={darkMode}
              />
              <FeatureCard
                icon="💳"
                title="Multiple Payment Options"
                description="Accept various payment methods including credit cards, bank transfers, and more."
                darkMode={darkMode}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#cd4347] text-textWhite py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-black">Why Choose rentalog?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold mb-2 text-[#1200ff]">98%</p>
                <p>On-time Payments</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2 text-[#07ffc8]">50%</p>
                <p>Time Saved on Admin</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2 text-[#ffee07]">24/7</p>
                <p>Customer Support</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2 text-[#14ff07]">100%</p>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TestimonialCard
                quote="rentalog has revolutionized how we manage our properties. Rent collection has never been easier!"
                author="Sarah Johnson"
                role="Property Manager, Urban Living Co."
                darkMode={darkMode}
              />
              <TestimonialCard
                quote="The automated reminders and easy tracking have significantly reduced our late payments. Highly recommended!"
                author="Michael Chen"
                role="Owner, Chen Properties"
                darkMode={darkMode}
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-dark text-textWhite py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Simplify Your Rent Collection?</h2>
            <p className="text-xl mb-8">Join thousands of satisfied property managers and start streamlining your processes today.</p>
            <Link to="/login"><button className="bg-[#1abc9c] text-textWhite font-bold py-3 px-8 rounded-full hover:bg-[#16a085] transition-colors">
              Start Your Free Trial
            </button></Link>
          </div>
        </section>
    <Footer/>
      </main>
    </div>
  );
};

export default TotalRentCollected;