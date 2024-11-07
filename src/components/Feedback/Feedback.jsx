import React, { useState } from "react";
import "./Feedback.css";
import Footer from "../Footer-section/Footer";
import RentNavbar from "../Header-section/RentNavbar";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && rating && feedback) {
      setIsSubmitted(true);
      // Here, handle actual submission, such as sending to a backend API
      console.log({
        name,
        email,
        rating,
        feedback,
      });
      // Reset form after submission
      setName("");
      setEmail("");
      setRating(0);
      setFeedback("");
      setHoverRating(0);
    } else {
      alert("Please fill out all fields");
    }
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="feedback-form-container">
        <RentNavbar />

        <form onSubmit={handleSubmit}>
          <h1 className="title">Feedback Form</h1>

          {/* Name Input */}
          <input
            className="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Email Input */}
          <input
            className="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Star Rating */}
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= (hoverRating || rating) ? "star-filled" : "star"
                }
                onClick={() => handleRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                ★
              </span>
            ))}
          </div>

          {/* Feedback Textarea */}
          <textarea
            className="message"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Describe your experience.."
            required
          />

          {/* Submit Button */}
          <button type="submit" className="post-button">
            Submit
          </button>
        </form>

        {/* Success Pop-up */}
        {isSubmitted && (
          <div className="popup-overlay">
            <div className="popup">
              <h3>Thank You!</h3>
              <p>Your feedback has been successfully submitted.</p>
              <button onClick={closePopup} className="close-popup-button">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Feedback;
