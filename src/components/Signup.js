// src/components/SignUp.js
import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import {
  getUserDataFromLocalStorage,
  saveUserDataToLocalStorage,
} from "../localStorageUtils";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email/phone is unique
    const existingUsers = getUserDataFromLocalStorage();
    if (existingUsers) {
      const isDuplicate = existingUsers.some((user) => user.email === email);
      if (isDuplicate) {
        setError("Email/phone already exists. Please use a different one.");
        return;
      }
    }

    // Create a unique user ID (you can use a library like 'uuid' for this)
    const userId = generateUniqueId();

    // Create the user object
    const user = {
      id: userId,
      firstName,
      lastName,
      email,
      password,
    };

    // Save user data to localStorage
    saveUserDataToLocalStorage([...(existingUsers || []), user]);

    // You can also set the user as authenticated and redirect here
  };

  const generateUniqueId = () => {
    // Generate a unique ID here, e.g., using 'uuid' library
    // For simplicity, you can use a timestamp for this example
    return Date.now().toString();
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Mobile number or email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          {error && <p className="error">{error}</p>}
        </form>
        <div>
          <Link to="/">Already have an account ?</Link>
        </div>
        <p>By signing up, you agree to our Terms and Data Policy.</p>
      </div>
    </div>
  );
}

export default SignUp;
