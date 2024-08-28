import React, { useState } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import axios from 'axios';

function App() {
    const [prn, setPrn] = useState('');
    const [studentData, setStudentData] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8800/students/${prn}`);
            setStudentData(response.data);
        } catch (error) {
            console.error('Error fetching student data:', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Student Management System</h1>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Enter PRN"
                        value={prn}
                        onChange={(e) => setPrn(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
                {studentData && <StudentForm studentData={studentData} />}
            </header>
        </div>
    );
}

export default App;
