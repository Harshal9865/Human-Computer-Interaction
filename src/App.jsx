import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Profile from './components/ProfilePage';
import AttendancePage from './components/AttendancePage'; // Updated route
import Navbar from './components/Navbar'; // Import your Navbar component
import Footer from './components/Footer'; // Import the Footer component
import AboutUsPage from './components/About'; // Import About Us page
import ContactPage from './components/Contact'; // Import Contact page
import PayrollPage from './components/Payroll'; // Import Payroll page

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar always at the top */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto pt-16"> {/* Adds space to avoid navbar overlap */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/attendance" element={<AttendancePage />} /> {/* Updated attendance route */}
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/payroll" element={<PayrollPage />} />
          </Routes>
        </main>

        {/* Footer always at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;