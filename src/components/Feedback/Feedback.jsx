import { useState,useEffect } from "react";
import { Star } from "lucide-react";
import "./Feedback.css";
import RentNavbar from "../Header-section/RentNavbar";
import Footer from "../Footer-section/Footer";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState({ name: "", email: "", rating: 0, message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleRating = (rating) => {
    setFeedback({ ...feedback, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.name && feedback.email && feedback.message) {
      setError("");
      setSubmitted(true);
      setFeedback({ name: "", email: "", rating: 0, message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setError("Please fill out all required fields.");
    }
  };

  return (
    <>
      <RentNavbar />
      <div className="feedback-container">
        <div className="feedback-card">
          <h2 className="feedback-title">We Value Your Feedback</h2>
          {submitted && <p className="feedback-success">🎉 Feedback submitted! Thank you!</p>}
          {error && <p className="feedback-error">⚠️ {error}</p>}
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="input-group">
              <label>Name</label>
              <input type="text" name="name" value={feedback.name} onChange={handleInputChange} placeholder="Enter your name" required />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" value={feedback.email} onChange={handleInputChange} placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              <label>Rating</label>
              <div className="feedback-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    onClick={() => handleRating(star)}
                    className={feedback.rating >= star ? "star-selected" : "star-unselected"}
                  />
                ))}
              </div>
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea name="message" value={feedback.message} onChange={handleInputChange} placeholder="Write your feedback here..." required />
            </div>
            <button type="submit" className="feedback-submit">Submit Feedback</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
