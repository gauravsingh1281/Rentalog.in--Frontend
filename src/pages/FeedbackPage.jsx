import React, { useState } from "react";
import Navbar from "../components/Header-section/Navbar";
import "../App.css";
import Footer from "../components/Footer-section/Footer";


const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [ratingComment, setRatingComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      // Here you can handle the submission of feedback and rating
      console.log("Feedback submitted:", feedback);
      console.log("Rating submitted:", rating);
      console.log("Rating comment:", ratingComment);
      setSubmitted(true);
    }
  };

  const handleRatingClick = (index) => {
    setRating(index + 1); // +1 because index is 0-based
    setRatingComment(getRatingComment(index + 1)); // Get comment based on the rating
  };

  const getRatingComment = (rating) => {
    switch (rating) {
      case 1:
        return "Very Bad 😣";
      case 2:
        return "Okay 🫥";
      case 3:
        return "Good 😉";
      case 4:
        return "Very Good 😊";
      case 5:
        return "Excellent 😍";
      default:
        return "";
    }
  };

  return (
    <>
   
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <div
          id="feedback"
          className="feedback-page"
          style={{
            maxWidth: "800px",
            width: "100%",
            margin: "20px",
            padding: "30px",
            backgroundColor: "#f7f7f7",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            className="title"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "10px",
            }}
          >
            Share Your Feedback !😊
          </h1>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                <h3 style={{ fontSize: "18px", color: "#333" }}>Give us : ⭐</h3>
                <div style={{ display: "flex", cursor: "pointer" }}>
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      onClick={() => handleRatingClick(index)}
                      style={{
                        fontSize: "30px",
                        color: index < rating ? "#FFD700" : "#ccc",
                      }}
                      aria-label={`Rate ${index + 1} star${index === 0 ? '' : 's'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                {rating > 0 && (
                  <p style={{ marginTop: "10px", color: "#333" }}>
                    ❤️ 
                    <strong>{ratingComment}</strong>
                  </p>
                )}
              </div>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write your feedback here..."
                rows={5}
                className="feedback-textarea"
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  resize: "vertical",
                  backgroundColor: "#fff",
                }}
              />
              <button
                type="submit"
                className="submit-button"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Submit
              </button>
              <div
                className="feedback-indicator"
                style={{
                  fontSize: "14px",
                  color: "#666",
                  marginTop: "10px",
                }}
              >
                {feedback.length > 0 ? (
                  <span
                    className="feedback-count"
                    style={{
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    {feedback.length} characters
                  </span>
                ) : (
                  <span
                    className="feedback-placeholder"
                    style={{
                      color: "#999",
                    }}
                  >
                    Start typing...
                  </span>
                )}
              </div>
            </form>
          ) : (
            <div
              className="thank-you-message"
              style={{
                fontSize: "18px",
                color: "#333",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <p>Thank you for your feedback! ❤️</p>
              <span
                role="img"
                aria-label="smiley face"
                style={{
                  fontSize: "24px",
                  marginLeft: "10px",
                }}
              >
                😊
              </span>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FeedbackPage;
