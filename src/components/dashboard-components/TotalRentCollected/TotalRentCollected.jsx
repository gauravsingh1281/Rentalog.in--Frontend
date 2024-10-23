/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect } from 'react';
import logo from "../../../assets/Images/logo.png"


const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-textWhite rounded-lg shadow-md p-6">
    <div className="text-[#1abc9c] text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role }) => (
  <div className="bg-textWhite rounded-lg shadow-md p-6">
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="font-semibold">{author}</p>
    <p className="text-sm text-gray-500">{role}</p>
  </div>
);

const TotalRentCollected = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className="min-h-screen bg-gray-100">
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
        <section className="bg-[#1abc9c] text-textWhite py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Simplify Your Rent Collection</h2>
            <p className="text-xl mb-8">Streamline your property management with our powerful rent collection system</p>
            <button className=" bg-textWhite text-[#1abc9c] font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors">
              Get Started
            </button>
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
              />
              <FeatureCard
                icon="🔔"
                title="Automated Reminders"
                description="Send automatic rent reminders to tenants, reducing late payments and saving you time."
              />
              <FeatureCard
                icon="💳"
                title="Multiple Payment Options"
                description="Accept various payment methods including credit cards, bank transfers, and more."
              />
            </div>
          </div>
        </section>

        <section className="bg-[#cd4347] text-textWhite py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose rentalog?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold mb-2">98%</p>
                <p>On-time Payments</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">50%</p>
                <p>Time Saved on Admin</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">24/7</p>
                <p>Customer Support</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">100%</p>
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
              />
              <TestimonialCard
                quote="The automated reminders and easy tracking have significantly reduced our late payments. Highly recommended!"
                author="Michael Chen"
                role="Owner, Chen Properties"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-dark text-textWhite py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Simplify Your Rent Collection?</h2>
            <p className="text-xl mb-8">Join thousands of satisfied property managers and start streamlining your processes today.</p>
            <button className="bg-[#1abc9c] text-textWhite font-bold py-3 px-8 rounded-full hover:bg-[#16a085] transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-dark text-textWhite py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Rentalog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TotalRentCollected;