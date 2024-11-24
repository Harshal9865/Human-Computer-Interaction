import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PayrollPage = () => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [leaveRequestStatus, setLeaveRequestStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission logic
    if (leaveType && startDate && endDate && reason) {
      setLeaveRequestStatus('submitted');
    } else {
      setLeaveRequestStatus('failed');
    }
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-gradient-to-r from-teal-500 to-emerald-400 text-white p-6 shadow-md lg:min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Payroll Dashboard</h2>
        <nav className="space-y-4">
          <motion.a
            href="/profile"
            className="block text-lg py-3 px-4 bg-white text-teal-600 rounded-lg shadow-md hover:bg-teal-100 hover:scale-105 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Profile
          </motion.a>
          <motion.a
            href="/attendance"
            className="block text-lg py-3 px-4 bg-white text-teal-600 rounded-lg shadow-md hover:bg-teal-100 hover:scale-105 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Attendance
          </motion.a>
          <motion.a
            href="/payroll"
            className="block text-lg py-3 px-4 bg-white text-teal-600 rounded-lg shadow-md hover:bg-teal-100 hover:scale-105 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Payroll
          </motion.a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-r from-gray-100 to-white p-6 lg:p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-4 text-green-800">Payroll Management</h1>
        <p className="text-lg text-gray-700 mb-8">
          Manage your leave requests and payroll details here.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Leave Approval Form */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg flex-1 lg:max-w-[54rem]" // Increased width by 50%
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-teal-600">Leave Approval</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="leaveType" className="block text-sm font-semibold text-gray-700">Leave Type</label>
                <select
                  id="leaveType"
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  className="w-full mt-2 p-2 border rounded-lg bg-gray-100 focus:ring-teal-500 hover:border-teal-500 transition duration-300 ease-in-out"
                >
                  <option value="">Select Leave Type</option>
                  <option value="sick">Sick Leave</option>
                  <option value="vacation">Vacation</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full mt-2 p-2 border rounded-lg bg-gray-100 focus:ring-teal-500 hover:border-teal-500 transition duration-300 ease-in-out"
                />
              </div>

              <div>
                <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full mt-2 p-2 border rounded-lg bg-gray-100 focus:ring-teal-500 hover:border-teal-500 transition duration-300 ease-in-out"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-semibold text-gray-700">Reason</label>
                <textarea
                  id="reason"
                  rows="4"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full mt-2 p-2 border rounded-lg bg-gray-100 focus:ring-teal-500 hover:border-teal-500 transition duration-300 ease-in-out"
                  placeholder="Enter the reason for your leave"
                />
              </div>

              <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
                Submit Leave Request
              </button>

              {leaveRequestStatus === 'submitted' && (
                <p className="text-green-500 mt-4 text-center">Leave request submitted successfully!</p>
              )}
              {leaveRequestStatus === 'failed' && (
                <p className="text-red-500 mt-4 text-center">Please fill in all fields.</p>
              )}
            </form>
          </motion.div>

          {/* Payroll Details Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-teal-600">Payroll Details</h3>
            <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-pink-600 to-green-500 text-white">
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Basic Salary</th>
                  <th className="py-2 px-4 border-b">Bonuses</th>
                  <th className="py-2 px-4 border-b">Deductions</th>
                  <th className="py-2 px-4 border-b">Net Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100 transition duration-200">
                  <td className="py-2 px-4 border-b">2024-10-01</td>
                  <td className="py-2 px-4 border-b">₹50,000</td>
                  <td className="py-2 px-4 border-b">₹5,000</td>
                  <td className="py-2 px-4 border-b">₹2,000</td>
                  <td className="py-2 px-4 border-b">₹53,000</td>
                </tr>
                {/* Additional rows */}
              </tbody>
            </table>
          </motion.div>

          {/* Bonus Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-teal-600">Bonus Details</h3>
            <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-pink-600 to-green-500 text-white">
                  <th className="py-2 px-4 border-b">Bonus Month</th>
                  <th className="py-2 px-4 border-b">Amount</th>
                  <th className="py-2 px-4 border-b">Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100 transition duration-200">
                  <td className="py-2 px-4 border-b">December 2024</td>
                  <td className="py-2 px-4 border-b">₹10,000</td>
                  <td className="py-2 px-4 border-b">Annual Performance Bonus</td>
                </tr>
                {/* Additional rows */}
              </tbody>
            </table>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PayrollPage;
