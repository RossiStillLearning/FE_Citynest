import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../image/Group 2.png'; // Import your logo image
import '../style/Login.css'; // Import your custom styles

const Login = () => {
  const [notification, setNotification] = useState(''); // State for the notification
  const navigate = useNavigate(); // Hook for navigation

  // Event handler for login button click
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    // Set a notification message
    setNotification('Login successful! Redirecting to Admin Page...');
    // Navigate to /adminpages
    setTimeout(() => {
      navigate('/adminpages');
    }, 2000); // Delay to show the notification before navigating
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row login-container">
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="logo">
            <img src={logo} alt="CityNest Logo" />
            <h2 className="logo-text"></h2>
          </div>
        </div>
        <div className="col-md-6 login-form shadow p-4">
          <h2 className="text-center mb-4">Login</h2>
          {notification && <div className="alert alert-success">{notification}</div>}
          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <label htmlFor="username">
                <i className="bi bi-person"></i> Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">
                <i className="bi bi-lock"></i> Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Login
            </button>
          </form>
          <div className="text-center mt-3">
            <span>Belum Punya Akun? <a href="#">Buat Akun</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
