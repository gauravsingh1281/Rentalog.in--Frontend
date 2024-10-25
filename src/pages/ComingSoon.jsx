// /c:/Users/Asus/OneDrive/Desktop/Open Source Contribution/Rentalog.in--Frontend/src/pages/ComingSoon.jsx

import React from 'react';
import { FaClock, FaTools } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
// import './ComingSoon.css';

const styles = {
  comingSoonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f2c4c4',
    color: '#333',
  },
  smallericons: {
    fontSize: '2rem',
    color: '#316FF6',
  },
  instagram: {
    fontSize: '2rem',
    color: '#4c68d7',
  },
  icon: {
    fontSize: '4rem',
    margin: '1rem',
  },
  heading: {
    fontSize: '2.5rem',
    margin: '1rem 0',
  },
  paragraph: {
    fontSize: '1.2rem',
    margin: '1rem 0',
  },
};

const inputStyles = {
  inputBox: {
    padding: '0.5rem',
    fontSize: '1rem',
    margin: '1rem 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '80%',
    maxWidth: '400px',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    margin: '1rem 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
  },
};
const ComingSoon = () => {

    const [email, setEmail] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can add the logic to handle the email submission, e.g., sending it to a server
      setSubmitted(true);
    };

    return (
      <div style={styles.comingSoonContainer}>
        <FaClock style={styles.icon} />
        <h1 style={styles.heading}>Coming Soon</h1>
        <p style={styles.paragraph}>We're working hard to bring you this page. Stay tuned!</p>
        <FaTools style={styles.icon} />
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email to get notified"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyles.inputBox}
              required
            />
            <button type="submit" style={inputStyles.button}>Notify Me</button>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem' }}>
              <FaFacebook style={styles.smallericons} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem' }}>
              <FaInstagram style={styles.instagram} />
              </a>
              <a href="mailto:someone@example.com" style={{ margin: '0 0.5rem' }}>
              <FaEnvelope style={styles.smallericons} />
              </a>
            </div>
          </form>
        ) : (
          <p style={styles.paragraph}>Thank you! We will notify you when the page is ready.</p>
        )}
    {/* <div style={styles.comingSoonContainer}>
      <FaClock style={styles.icon} />
      <h1 style={styles.heading}>Coming Soon</h1>
      <p style={styles.paragraph}>We're working hard to bring you this page. Stay tuned!</p>
      <FaTools style={styles.icon} />
    </div> */}
      </div>
    );
  };

export default ComingSoon;

