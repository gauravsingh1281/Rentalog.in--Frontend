import React from 'react';
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p className="policy-date">Last Updated: November 2024</p>

      <article className="policy-section">
        <h2>1. Data Collection</h2>
        <p>
          We collect personal data, such as your name, email, and contact details, along with non-personal 
          data like browsing behavior. This data is gathered through forms, cookies, and other technologies 
          with your consent in compliance with GDPR and CCPA.
        </p>
      </article>

      <article className="policy-section">
        <h2>2. Use of Information</h2>
        <p>
          Collected data helps us enhance our services, personalize experiences, respond to inquiries, and 
          improve site functionality. We may also conduct research and analysis to improve our offerings. 
          Any use of your data aligns with legal requirements.
        </p>
      </article>

      <article className="policy-section">
        <h2>3. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your information. Despite these 
          efforts, no online platform can be completely secure. We recommend taking additional precautions 
          to protect your data.
        </p>
      </article>

      <article className="policy-section">
        <h2>4. Cookies</h2>
        <p>
          Cookies help enhance your browsing experience by remembering preferences and tracking usage patterns. 
          You can disable cookies in your browser settings, but some site features may be affected.
        </p>
      </article>

      <article className="policy-section">
        <h2>5. Third-Party Services</h2>
        <p>
          We use third-party services for hosting, analytics, and advertising, each of which adheres to its 
          privacy policies. While we work with reputable companies, we are not responsible for their practices.
        </p>
      </article>

      <article className="policy-section">
        <h2>6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. For any requests 
          regarding these rights, please contact us at privacy@yourdomain.com.
        </p>
      </article>

      <article className="policy-section">
        <h2>7. Policy Updates</h2>
        <p>
          This policy may be updated periodically to reflect changes in practices or legal requirements. 
          We encourage you to review this page regularly.
        </p>
      </article>
    </div>
  );
};

export default PrivacyPolicy;
