import React from 'react';
import { useEffect } from 'react';
import './TermsConditions.css';
import RentNavbar from '../Header-section/RentNavbar';
import Footer from '../Footer-section/Footer';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RentNavbar />
      <div className="policy-container">
        <h1 className="policy-title">Terms and Conditions</h1>

        <section className="policy-section">
          <h2 className="policy-heading">1. Introduction</h2>
          <p className="policy-text">
            Welcome to Rentalog, your trusted platform for managing rental properties. By accessing or using this website, you agree to comply with these terms and conditions.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-heading">2. Services</h2>
          <p className="policy-text">
            Our website provides landlords and tenants with tools to manage rental listings, track payments, and communicate effectively. The use of these services is subject to the terms outlined in this document.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-heading">3. User Obligations</h2>
          <p className="policy-text">
            As a landlord, you are responsible for ensuring that your property listings are accurate and up-to-date. Tenants should ensure that their rental payments and obligations are fulfilled as agreed upon in their rental contracts.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-heading">4. Payments and Fees</h2>
          <p className="policy-text">
            Payment processing is handled through secure third-party services. Rentalog is not liable for any issues related to payment failures, processing delays, or discrepancies in rental amounts.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-heading">5. Limitation of Liability</h2>
          <p className="policy-text">
            Rentalog is not responsible for any disputes that arise between landlords and tenants, including but not limited to lease violations, non-payment, or damages to the property.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-heading">6. Termination</h2>
          <p className="policy-text">
            Rentalog reserves the right to terminate or suspend user accounts if there is evidence of fraudulent activity, violation of terms, or misuse of the platform.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-heading">7. Governing Law</h2>
          <p className="policy-text">
            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the property is located.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
