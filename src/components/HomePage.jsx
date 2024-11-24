// src/components/HomePage.js
import React, { useState } from 'react';
import Login from './Login';

function HomePage({ onLogin }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleLoginSuccess = () => {
    onLogin(); // Call the parent component's login function
    setIsLoginOpen(false); // Close the login modal
  };

  return (
    <div className={`relative w-screen h-screen ${isLoginOpen ? 'overflow-hidden' : ''}`}>
      <div
        className={`${
          isLoginOpen ? 'blur-lg' : ''
        } flex flex-col items-center justify-center h-full bg-gradient-to-r from-green-400 to-blue-500`}
      >
        <h1 className="text-5xl font-bold text-white">Employee Payroll Management System</h1>
        <p className="mt-4 text-lg text-white">
          Manage your profile, attendance, payroll, and more.
        </p>
        <button
          onClick={handleLoginOpen}
          className="px-6 py-3 mt-8 text-lg font-bold text-white bg-primary rounded-lg hover:bg-green-700"
        >
          Log In
        </button>
      </div>
      {isLoginOpen && <Login closeLogin={handleLoginClose} onLogin={handleLoginSuccess} />}
    </div>
  );
}

export default HomePage;