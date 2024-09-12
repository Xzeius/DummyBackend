import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceTable = () => {
  const [attendanceData, setAttendanceData] = useState(null); // State to store the fetched attendance data
  const [loading, setLoading] = useState(true); // State to manage the loading status
  const [error, setError] = useState(null); // State to manage any errors

  // Fetch attendance data using useEffect and axios
  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/students/attendance'); // Replace with your actual API URL
        setAttendanceData(response.data); // Assuming the response data is in the correct format
        setLoading(false); // Turn off loading when data is fetched
      } catch (error) {
        setError('Failed to fetch attendance data');
        setLoading(false); // Turn off loading even in case of an error
      }
    };

    fetchAttendanceData(); // Trigger the fetch function when the component mounts
  }, []);

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>{error}</div>;
  }

  // Handle case when attendanceData is not available or empty
  if (!attendanceData || !attendanceData.theory || !attendanceData.practical || !attendanceData.dates) {
    return <div>No attendance data available</div>;
  }

  const { theory, practical, dates } = attendanceData;

  // Ensure unique dates
  const uniqueDates = [...new Set(dates)];

  const subjects = Object.keys(theory);

  const renderTableRows = (data) => {
    return subjects.map((subject) => {
      let lastNumber = 0;
      return (
        <tr key={subject}>
          <td className="subject-cell">{subject}</td>
          {data[subject].map((attendance, index) => {
            if (attendance === 1) {
              lastNumber += 1;
            }
            return (
              <td key={index} className={attendance === 1 ? 'present' : 'absent'}>
                {lastNumber}
              </td>
            );
          })}
        </tr>
      );
    });
  };

  return (
    <div className="attendance-tables">
      <div className="attendance-table">
        <h4>Theory</h4>
        <div className="table-wrapper">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="subject-header">Subject</th>
                  {uniqueDates.map((date) => (
                    <th key={date}>{date}</th>
                  ))}
                </tr>
              </thead>
              <tbody>{renderTableRows(theory)}</tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="attendance-table">
        <h4>Practical</h4>
        <div className="table-wrapper">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="subject-header">Subject</th>
                  {uniqueDates.map((date) => (
                    <th key={date}>{date}</th>
                  ))}
                </tr>
              </thead>
              <tbody>{renderTableRows(practical)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
