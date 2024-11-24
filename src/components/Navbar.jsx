import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import framer-motion for animations

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the menu state for mobile view

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-gradient-to-r from-teal-500 to-emerald-400 w-full fixed top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo or Brand Name */}
                <Link to="/dashboard" className="flex items-center space-x-2">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/013/063/127/small_2x/job-logo-design-job-search-icon-with-magnifying-glass-choose-people-for-hire-symbol-job-or-employee-logo-free-vector.jpg" 
                        alt="Employee Management Logo"
                        className="w-8 h-8 object-contain"
                    />
                    <span className="text-white text-2xl font-bold tracking-tight">
                        Employee Management
                    </span>
                </Link>

                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-3xl focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-125"
                    >
                        {isMenuOpen ? '×' : '☰'}
                    </button>
                </div>

                <div className="space-x-8 flex-1 justify-end items-center hidden lg:flex">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            to="/dashboard"
                            className="text-white text-lg hover:text-gray-100 transition duration-300 ease-in-out"
                        >
                            Dashboard
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Link
                            to="/about"
                            className="text-white text-lg hover:text-gray-100 transition duration-300 ease-in-out"
                        >
                            About Us
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9 }}
                    >
                        <Link
                            to="/contact"
                            className="text-white text-lg hover:text-gray-100 transition duration-300 ease-in-out"
                        >
                            Contact
                        </Link>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-400`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link
                    to="/dashboard"
                    className="block text-white text-lg py-2 hover:text-gray-100 transition duration-300 ease-in-out"
                >
                    Dashboard
                </Link>
                <Link
                    to="/about"
                    className="block text-white text-lg py-2 hover:text-gray-100 transition duration-300 ease-in-out"
                >
                    About Us
                </Link>
                <Link
                    to="/contact"
                    className="block text-white text-lg py-2 hover:text-gray-100 transition duration-300 ease-in-out"
                >
                    Contact
                </Link>
            </motion.div>
        </nav>
    );
};

export default Navbar;
