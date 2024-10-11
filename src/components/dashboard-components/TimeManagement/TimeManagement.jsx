/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import logo from "../../../assets/Images/logo.png"


const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-textWhite p-6 rounded-lg shadow-md">
    <div className="text-[#1abc9c] text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-dark">{description}</p>
  </div>
);

const TimeManagement = () => {
  return (
    <div className="min-h-screen bg-gray-light">
      <header className="bg-[#1abc9c] text-textWhite py-4">
      <div className="px-4 bg-textWhite w-fit rounded-xl absolute top-0 left-0 m-[1.5rem]">
              <img
                className="self-start w-40"
                src={logo}
                alt="Rentalog-logo"
              />
            </div>
      </header>

      <main>
        <section className="py-20 bg-[#1abc9c] text-textWhite">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Master Your Time</h2>
            <p className="text-xl mb-8">Boost your productivity with rentalog, the smart time management solution</p>
            <button className="bg-textWhite text-[#1abc9c] font-bold py-2 px-6 rounded-full hover:bg-gray-dark transition-colors">
              Start Free Trial
            </button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon="⏱️"
                title="Task Tracking"
                description="Easily manage and prioritize your tasks"
              />
              <FeatureCard
                icon="📊"
                title="Time Analytics"
                description="Gain insights into your time usage patterns"
              />
              <FeatureCard
                icon="🔔"
                title="Smart Reminders"
                description="Stay on track with personalized notifications"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#cd4347] text-textWhite">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose rentalog?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold mb-2">25%</p>
                <p>Productivity Boost</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">10hrs</p>
                <p>Saved Weekly</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">98%</p>
                <p>User Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">24/7</p>
                <p>Support</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Optimize Your Time?</h2>
            <button className="bg-[#1abc9c] text-textWhite font-bold py-3 px-8 rounded-full hover:bg-[#16a085] transition-colors">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-dark text-textWhite py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 rentalog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TimeManagement;