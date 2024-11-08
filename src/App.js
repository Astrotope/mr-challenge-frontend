import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await fetch("https://mr-challenge-backend.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Your Future Starts Here</h2>
      <p>Enter your email address</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="alan@mrhq.com"
        className="email-input"
      />
      <button onClick={handleSubscribe} className="subscribe-button">
        Subscribe
      </button>
      <img
            src="/scottish-unicorn.png"
            alt="Scottish Unicorn"
            className="unicorn-image"
      />
      {message && (
        <div className="message">
          {message}
        </div>
      )}
    </div>
  );
}

export default App;
