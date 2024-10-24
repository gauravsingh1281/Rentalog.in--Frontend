import React, { useState } from 'react';
import './FAQ.css'; // Import the CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is Rentalog?',
      answer: 'Rentalog is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'How can I store tenant information?',
      answer: 'Rentalog allows you to store important information such as the tenant\'s name, address, and phone number, making it easy to access whenever needed.'
    },
    {
      question: 'Can Rentalog track rent payments?',
      answer: 'Yes, Rentalog tracks monthly rent payments for all your tenants and provides a complete overview of your rental income.'
    },
    {
      question: 'Is there a way to automatically calculate total rent?',
      answer: 'Yes, Rentalog automatically calculates the total rent received each month and offers a breakdown of payments by tenant.'
    },
    {
      question: 'Can I list my properties on Rentalog?',
      answer: 'Yes, you can list your rental properties on Rentalog and keep all information organized in one place.'
    },
    {
      question: 'Is Rentalog secure for storing tenant information?',
      answer: 'Rentalog takes security seriously and ensures that all tenant information is stored securely with proper encryption.'
    },
    {
      question: 'How do I add a new tenant in Rentalog?',
      answer: 'To add a new tenant, go to the Tenant Management section and fill in the required details like name, address, and contact information.'
    },
    {
      question: 'Can I track multiple properties in Rentalog?',
      answer: 'Yes, Rentalog supports tracking multiple rental properties, allowing you to manage information for all your rentals in one platform.'
    },
    {
      question: 'Is Rentalog free to use?',
      answer: 'Yes, Rentalog is completely free to use for all landlords looking to manage their tenant information and rental payments.'
    },
    {
      question: 'How do I track missed or late payments?',
      answer: 'Rentalog helps you track any missed or late payments, ensuring that you stay on top of your rental income.'
    }
  ];

  return (
    <div className="faq-container" id="FAQ">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
