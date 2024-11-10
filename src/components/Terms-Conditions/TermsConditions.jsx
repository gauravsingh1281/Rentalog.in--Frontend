import React from 'react';
import './TermsConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p className="terms-date">Last Updated: November 2024</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Rentalog, a platform dedicated to managing rental properties. By accessing or using Rentalog,
          you agree to be bound by these terms and conditions and any applicable laws.
        </p>
      </section>

      <section>
        <h2>2. Services Provided</h2>
        <p>
          Rentalog offers tools for landlords and tenants, such as rental listings management, payment tracking,
          and communication services. All users are subject to the conditions described herein.
        </p>
      </section>

      <section>
        <h2>3. User Obligations</h2>
        <p>
          <strong>Landlords:</strong> You must ensure your property listings are accurate and up-to-date. <br />
          <strong>Tenants:</strong> You are responsible for fulfilling rental payments and any obligations outlined 
          in your rental agreement.
        </p>
      </section>

      <section>
        <h2>4. Payments and Fees</h2>
        <p>
          Payments are processed through secure, third-party services. Rentalog is not liable for payment issues 
          including delays or discrepancies. Users are advised to contact support for payment-related inquiries.
        </p>
      </section>

      <section>
        <h2>5. Limitation of Liability</h2>
        <p>
          Rentalog is not responsible for disputes between landlords and tenants, such as lease violations or 
          property damages. Both parties agree to resolve disputes independently.
        </p>
      </section>

      <section>
        <h2>6. Termination of Services</h2>
        <p>
          Rentalog reserves the right to suspend or terminate user accounts for reasons including, but not limited to, 
          fraudulent activity or misuse of the platform.
        </p>
      </section>

      <section>
        <h2>7. Governing Law</h2>
        <p>
          These terms are governed by the laws of the jurisdiction where the rental property is located. Users 
          agree to comply with all applicable regulations.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
