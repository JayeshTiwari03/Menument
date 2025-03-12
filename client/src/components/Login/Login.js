import React from "react";
import userAuthenticated from "../../authentication/userAuthenticated";
import "./Login.css";

const Login = () => {
  const { isLoggedIn, email, handleEmailInput, login } = userAuthenticated();

  const handleLoginClick = () => {
    login();
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <div className="login-card-container">
        <label htmlFor="email-field">Email</label>
        <input
          type="email"
          id="email-field"
          onChange={handleEmailInput}
          value={email}
          placeholder="Enter your email"
        />
        <button onClick={handleLoginClick} className="login-button">
          Login now!
        </button>
        {isLoggedIn && <p>Logged in as: {email}</p>}
      </div>
    </div>
  );
};

export default Login;
