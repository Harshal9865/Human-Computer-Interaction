import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Toggle for mobile sidebar

  const previousMonthDays = [
    { date: 1, status: 'present' },
    { date: 2, status: 'absent' },
    { date: 3, status: 'present' },
    { date: 4, status: 'present' },
    { date: 5, status: 'absent' },
    { date: 6, status: 'present' },
    { date: 7, status: 'absent' },
  ];

  const getStatusIcon = (status) => {
    return status === 'present' ? '✔' : '❌';
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`w-64 bg-gradient-to-r from-teal-500 to-emerald-400 text-white p-6 shadow-md min-h-screen transition-transform duration-300 ${isSidebarOpen ? 'transform-none' : '-translate-x-full'}`}>
        <h2 className="text-3xl font-bold mb-6 text-teal-100">Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/profile" className="block text-lg py-3 px-4 bg-white text-teal-600 rounded-lg shadow-md hover:bg-teal-100 hover:scale-105 transform transition-all duration-300">
            Profile
          </Link>
          <Link to="/attendance" className="block text-lg py-3 px-4 bg-white text-teal-600 rounded-lg shadow-md hover:bg-teal-100 hover:scale-105 transform transition-all duration-300">
            Attendance
          </Link>
          <Link to="/payroll" className="block text-lg py-3 px-4 bg-white text-teal-600 rounded-lg shadow-md hover:bg-teal-100 hover:scale-105 transform transition-all duration-300">
            Payroll
          </Link>
        </nav>
      </aside>

      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="lg:hidden absolute top-4 left-4 p-2 bg-teal-500 text-white rounded-lg shadow-md z-10 hover:bg-teal-600 focus:outline-none"
      >
        {isSidebarOpen ? 'Close' : 'Open'}
      </button>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-r from-gray-100 to-white p-8 overflow-auto">
        <h1 className="text-4xl font-bold mb-4 text-green-800">Welcome, Employee!</h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Here you can view your profile, check attendance, and manage your payroll.
        </p>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Profile Card */}
          <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-center text-teal-600">Profile</h3>
            <div className="flex items-center mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9B_4vX6dIm6o4XZ3x8ksR3wjjIaGm69VRg&s"
                alt="Employee"
                className="w-20 h-20 rounded-full border-4 border-teal-400 mx-auto transition-transform transform hover:scale-110"
              />
              <div className="text-center mt-4">
                <p className="font-bold text-lg text-teal-700">Abhishek Upmanyu</p>
                <p className="text-gray-600">Software Engineer</p>
                <p className="text-gray-600">Email: abhi.abhi@gogo.com</p>
                <p className="text-gray-600">Phone: +91 9839893766</p>
              </div>
            </div>

            {/* Previous Projects and Performance */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2 text-teal-500">Previous Projects</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Project A:</strong> Developed a full-stack web application using React and Node.js.</li>
                <li><strong>Project B:</strong> Optimized backend systems for faster data processing in Python.</li>
                <li><strong>Project C:</strong> Led a team of developers to build an internal tool for project management.</li>
              </ul>
              <h4 className="text-lg font-semibold mt-4 mb-2 text-teal-500">Performance</h4>
              <p className="text-gray-700">
                John has shown exceptional skills in software development, particularly in full-stack applications.
                Has a good project handling.
              </p>
              <p className="text-gray-700">
                Performance Rating: <span className="font-semibold text-green-600">A</span>
              </p>
            </div>
          </div>

          {/* Attendance Card */}
          <div className="p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Attendance</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-pink-600 to-green-500 text-white">
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Status</th>
                    <th className="py-2 px-4 border-b">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {previousMonthDays.map((day) => (
                    <tr className="hover:bg-gray-100 transition-all duration-200" key={day.date}>
                      <td className="py-2 px-4 border-b">{`2024-10-${day.date.toString().padStart(2, '0')}`}</td>
                      <td className="py-2 px-4 border-b text-green-600">{getStatusIcon(day.status)}</td>
                      <td className="py-2 px-4 border-b">N/A</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Calendar for Previous Month */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Calendar for October 2024</h4>
              <div className="grid grid-cols-7 gap-2 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                  <div key={index} className="font-semibold">{day}</div>
                ))}
                {previousMonthDays.map((day) => (
                  <div
                    key={day.date}
                    className={`p-2 rounded-lg ${day.status === 'present' ? 'bg-green-100' : 'bg-red-100'} border`}
                  >
                    {day.date} {getStatusIcon(day.status)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payroll Card */}
          <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Payroll</h3>
            <h4 className="text-lg font-semibold mb-4">Leave Approval</h4>
            <form>
              <div className="mb-4">
                <label htmlFor="leaveType" className="block text-sm font-semibold text-gray-700">Leave Type</label>
                <select id="leaveType" className="w-full mt-2 p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300">
                  <option value="sick">Sick Leave</option>
                  <option value="vacation">Vacation</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  className="w-full mt-2 p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  className="w-full mt-2 p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="reason" className="block text-sm font-semibold text-gray-700">Reason</label>
                <textarea
                  id="reason"
                  rows="4"
                  className="w-full mt-2 p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                  placeholder="Enter your reason for leave"
                />
              </div>
              <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300">Submit Leave Request</button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
