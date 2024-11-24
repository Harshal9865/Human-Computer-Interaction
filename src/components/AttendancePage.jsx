import React, { useState } from 'react';
import { format } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';

const AttendancePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceData, setAttendanceData] = useState([
    { date: '2024-10-01', status: 'Present', workFromHome: 'No' },
    { date: '2024-10-02', status: 'Absent', workFromHome: 'No' },
    { date: '2024-10-03', status: 'Present', workFromHome: 'Yes' },
    { date: '2024-10-04', status: 'Absent', workFromHome: 'No' },
    { date: '2024-10-05', status: 'Present', workFromHome: 'Yes' },
  ]);
  const [todayClicked, setTodayClicked] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setTodayClicked(false);
  };

  const handleTodayClick = () => {
    setSelectedDate(new Date());
    setTodayClicked(true);
  };

  const selectedDateFormatted = format(selectedDate, 'yyyy-MM-dd');

  const getAttendanceStatus = (date) => {
    const entry = attendanceData.find(item => item.date === date);
    return entry ? entry.status : 'No Data';
  };

  const markAttendance = () => {
    const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    const newData = [...attendanceData];
    const existingEntry = newData.find(item => item.date === formattedDate);

    if (existingEntry) {
      existingEntry.status = 'Present';
    } else {
      newData.push({ date: formattedDate, status: 'Present', workFromHome: 'No' });
    }
    setAttendanceData(newData);
  };

  const upcomingEvents = [
    { date: '2024-12-01', event: 'Company Annual Meetup' },
    { date: '2024-12-10', event: 'Holiday Party' },
    { date: '2024-12-25', event: 'Christmas Day' },
    { date: '2024-12-31', event: 'New Year\'s Eve' },
    { date: '2024-01-26', event: 'Republic Day' },
    { date: '2024-03-20', event: 'Holi' },
    { date: '2024-08-15', event: 'Independence Day' },
    { date: '2024-10-02', event: 'Gandhi Jayanti' },
    { date: '2024-10-25', event: 'Diwali' },
    { date: '2024-12-15', event: 'Christmas Eve' },
    { date: '2024-12-02', event: 'Guru Nanak Jayanti' },
    { date: '2024-04-14', event: 'Baisakhi' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-teal-600">
          Attendance Overview
        </h1>

        <div className="flex flex-col gap-8 md:flex-row md:gap-10 w-full">
          {/* Calendar Section */}
          <motion.div
            className="w-full md:w-[45%] bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-teal-600">
              Attendance Calendar
            </h2>
            <div className="flex justify-center mb-4">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                className={`border-2 border-teal-500 rounded-lg shadow-lg w-full ${todayClicked ? 'react-calendar-today' : ''}`}
                tileClassName={({ date }) => {
                  const formattedDate = format(date, 'yyyy-MM-dd');
                  if (attendanceData.find(item => item.date === formattedDate && item.status === 'Present')) {
                    return 'bg-green-500'; 
                  } else if (!todayClicked && formattedDate === format(selectedDate, 'yyyy-MM-dd')) {
                    return 'bg-yellow-300'; 
                  }
                  return '';
                }}
              />
            </div>
            <p className="text-center mt-4">
              <span className="font-semibold text-teal-600">Selected Date:</span> {format(selectedDate, 'MMMM dd, yyyy')}
            </p>
            <p className="text-center mt-2">
              <span className="font-semibold text-teal-600">Status:</span> {getAttendanceStatus(selectedDateFormatted)}
            </p>
            <button
              onClick={handleTodayClick}
              className="mt-4 w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200 transform hover:scale-105"
            >
              Today
            </button>
            <button
              onClick={markAttendance}
              className="mt-4 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 transform hover:scale-105"
            >
              Mark Present
            </button>
          </motion.div>

          {/* Attendance Table Section */}
          <motion.div
            className="w-full md:w-[45%] bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-teal-600">
              Attendance History
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-teal-600 text-white">
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Work From Home</th>
                    <th className="px-4 py-2">Reviews</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((item, index) => (
                    <motion.tr
                      key={index}
                      className="border-b hover:bg-teal-100 transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                    >
                      <td className="px-4 py-2 text-center">{format(new Date(item.date), 'MMMM dd, yyyy')}</td>
                      <td className="px-4 py-2 text-center">{item.status}</td>
                      <td className="px-4 py-2 text-center">{item.workFromHome}</td>
                      <td className="px-4 py-2 text-center">
                        <button className="bg-green-600 text-white py-1 px-3 rounded-lg hover:bg-green-700 transition duration-200 transform hover:scale-105">
                          View
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Upcoming Events & Holidays */}
          <motion.div
            className="w-full md:w-[45%] bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-teal-600">
              Upcoming Events & Holidays
            </h2>
            <ul className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <li key={index} className="flex justify-between items-center hover:bg-teal-100 transition-all duration-200 p-2 rounded-lg">
                  <span className="font-semibold text-gray-700">{format(new Date(event.date), 'MMMM dd, yyyy')}</span>
                  <span className="text-gray-600">{event.event}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
