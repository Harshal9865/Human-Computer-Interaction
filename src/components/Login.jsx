// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ closeLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation logic here if needed
    closeLogin(); // Close the login modal
    navigate('/dashboard'); // Redirect to the Dashboard
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">Employee Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-primary rounded-lg hover:bg-green-700"
          >
            Log In
          </button>
          <button
            type="button"
            onClick={closeLogin}
            className="w-full px-4 py-2 mt-2 font-semibold text-center text-gray-500 dark:text-gray-300 hover:underline"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;