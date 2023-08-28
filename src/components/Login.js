// src/components/Login.js
import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom'

import { getUserDataFromLocalStorage } from "../localStorageUtils";

function Login({ setAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user exists in localStorage
    const users = getUserDataFromLocalStorage() || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
   
    if (!user) {
      setError("Invalid email or password.");
      setAuthenticated(false)
      return;
    }
     if (user) {
       setAuthenticated(true);
     }

    // You can set user as authenticated and redirect here
    // For simplicity, we'll redirect to the home page ("/home")
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login to Facebook</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email address or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
        {error && <p className="error">{error}</p>}
        <div className="forgot-password">
          <Link to="/">Forgot Password?</Link>
          <Link to="/register">Sign up for Facebook</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
