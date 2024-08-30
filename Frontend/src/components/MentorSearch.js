// Frontend/src/components/MentorSearch.js
import React, { useState } from 'react';
import axios from 'axios';

function MentorSearch() {
    const [prn, setPrn] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [message, setMessage] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8800/mentors/${prn}`);
            setStudentData(response.data);
        } catch (error) {
            console.error('Error fetching student data:', error);
        }
    };
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8800/mentors/${prn}`);
            setMessage(response.data.message);
            setStudentData(null); // Clear student data after successful deletion
        } catch (error) {
            console.error('Error deleting student:', error);
            setMessage('Error deleting student.');
        }
    };

    return (
        <div>
            <h1>Mentor Student Search</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter PRN"
                    value={prn}
                    onChange={(e) => setPrn(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {studentData && (
                <div>
                <h2>Student Details</h2>
                <div>
                    <p><strong>Full Name:</strong> {studentData.fullname}</p>
                    <p><strong>Date of Birth:</strong> {studentData.date_of_birth}</p>
                    <p><strong>Branch:</strong> {studentData.branch}</p>
                    <p><strong>Photo URL:</strong> {studentData.photo}</p>
                    <p><strong>Year of Admission:</strong> {studentData.year_of_admission}</p>
                    <p><strong>Mother Tongue:</strong> {studentData.mother_tongue}</p>
                    <p><strong>Present Address:</strong> {studentData.present_address}</p>
                    <p><strong>Mobile Number:</strong> {studentData.mobile_number}</p>
                    <p><strong>Landline:</strong> {studentData.landline}</p>
                    <p><strong>Email:</strong> {studentData.email}</p>
                    <p><strong>Blood Group:</strong> {studentData.blood_group}</p>
                </div>
            
                <h2>Parent Details</h2>
                <div>
                    <p><strong>Father's Name:</strong> {studentData.father_name}</p>
                    <p><strong>Father's Occupation:</strong> {studentData.father_occupation}</p>
                    <p><strong>Father's Mobile Number:</strong> {studentData.father_mobile_number}</p>
                    <p><strong>Mother's Name:</strong> {studentData.mother_name}</p>
                    <p><strong>Mother's Occupation:</strong> {studentData.mother_occupation}</p>
                    <p><strong>Mother's Mobile Number:</strong> {studentData.mother_mobile_number}</p>
                </div>
            
                <h2>Education Details</h2>
                <div>
                    <p><strong>SSC Percentage:</strong> {studentData.ssc_percentage}</p>
                    <p><strong>SSC Medium:</strong> {studentData.ssc_medium}</p>
                    <p><strong>SSC Board:</strong> {studentData.ssc_board}</p>
                    <p><strong>HSC/Diploma Percentage:</strong> {studentData.hsc_or_diploma_percentage}</p>
                    <p><strong>HSC/Diploma Medium:</strong> {studentData.hsc_or_diploma_medium}</p>
                    <p><strong>HSC/Diploma Board:</strong> {studentData.hsc_or_diploma_board}</p>
                    <p><strong>CET Percentile:</strong> {studentData.cet_percentile}</p>
                    <p><strong>JEE Percentile:</strong> {studentData.jee_percentile}</p>
                </div>
            
                <h2>Personal Details</h2>
                <div>
                    <p><strong>Hobbies:</strong> {studentData.hobbies}</p>
                    <p><strong>Strengths:</strong> {studentData.strengths}</p>
                    <p><strong>Weakness:</strong> {studentData.weakness}</p>
                    <p><strong>Short Term Goals:</strong> {studentData.short_term_goals}</p>
                    <p><strong>Long Term Goals:</strong> {studentData.long_term_goals}</p>
                    <p><strong>Extra Curricular:</strong> {studentData.extra_curricular}</p>
                </div>
                <button onClick={handleDelete}>Delete Student</button>
            </div>
            
            )}
            {message && <p>{message}</p>} 
        </div>
    );
}

export default MentorSearch;
