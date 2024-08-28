import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentForm = ({ studentData }) => {
    const [student, setStudent] = useState({});

    useEffect(() => {
        if (studentData) {
            setStudent(studentData);
        }
    }, [studentData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudent(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8800/students/${studentData.prn}`, student)
            .then(response => {
                alert('Student details updated successfully');
            })
            .catch(error => {
                console.error('There was an error updating the student data!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Student Details</h2>
            <input type="text" name="fullname" value={student.fullname || ''} onChange={handleInputChange} placeholder="Full Name" />
            <input type="date" name="date_of_birth" value={student.date_of_birth ? student.date_of_birth.slice(0, 10) : ''} onChange={handleInputChange} placeholder="Date of Birth" />
            <input type="text" name="branch" value={student.branch || ''} onChange={handleInputChange} placeholder="Branch" />
            <input type="text" name="photo" value={student.photo || ''} onChange={handleInputChange} placeholder="Photo URL" />
            <input type="text" name="year_of_admission" value={student.year_of_admission || ''} onChange={handleInputChange} placeholder="Year of Admission" />
            <input type="text" name="mother_tongue" value={student.mother_tongue || ''} onChange={handleInputChange} placeholder="Mother Tongue" />
            <input type="text" name="present_address" value={student.present_address || ''} onChange={handleInputChange} placeholder="Present Address" />
            <input type="text" name="mobile_number" value={student.mobile_number || ''} onChange={handleInputChange} placeholder="Mobile Number" />
            <input type="text" name="landline" value={student.landline || ''} onChange={handleInputChange} placeholder="Landline" />
            <input type="email" name="email" value={student.email || ''} onChange={handleInputChange} placeholder="Email" />
            <input type="text" name="blood_group" value={student.blood_group || ''} onChange={handleInputChange} placeholder="Blood Group" />

            <h2>Parent Details</h2>
            <input type="text" name="father_name" value={student.father_name || ''} onChange={handleInputChange} placeholder="Father's Name" />
            <input type="text" name="father_occupation" value={student.father_occupation || ''} onChange={handleInputChange} placeholder="Father's Occupation" />
            <input type="text" name="father_mobile_number" value={student.father_mobile_number || ''} onChange={handleInputChange} placeholder="Father's Mobile Number" />
            <input type="text" name="mother_name" value={student.mother_name || ''} onChange={handleInputChange} placeholder="Mother's Name" />
            <input type="text" name="mother_occupation" value={student.mother_occupation || ''} onChange={handleInputChange} placeholder="Mother's Occupation" />
            <input type="text" name="mother_mobile_number" value={student.mother_mobile_number || ''} onChange={handleInputChange} placeholder="Mother's Mobile Number" />

            <h2>Education Details</h2>
            <input type="number" name="ssc_percentage" value={student.ssc_percentage || ''} onChange={handleInputChange} placeholder="SSC Percentage" />
            <input type="text" name="ssc_medium" value={student.ssc_medium || ''} onChange={handleInputChange} placeholder="SSC Medium" />
            <input type="text" name="ssc_board" value={student.ssc_board || ''} onChange={handleInputChange} placeholder="SSC Board" />
            <input type="number" name="hsc_or_diploma_percentage" value={student.hsc_or_diploma_percentage || ''} onChange={handleInputChange} placeholder="HSC/Diploma Percentage" />
            <input type="text" name="hsc_or_diploma_medium" value={student.hsc_or_diploma_medium || ''} onChange={handleInputChange} placeholder="HSC/Diploma Medium" />
            <input type="text" name="hsc_or_diploma_board" value={student.hsc_or_diploma_board || ''} onChange={handleInputChange} placeholder="HSC/Diploma Board" />
            <input type="number" name="cet_percentile" value={student.cet_percentile || ''} onChange={handleInputChange} placeholder="CET Percentile" />
            <input type="number" name="jee_percentile" value={student.jee_percentile || ''} onChange={handleInputChange} placeholder="JEE Percentile" />

            <h2>Personal Details</h2>
            <input type="text" name="hobbies" value={student.hobbies || ''} onChange={handleInputChange} placeholder="Hobbies" />
            <input type="text" name="strengths" value={student.strengths || ''} onChange={handleInputChange} placeholder="Strengths" />
            <input type="text" name="weakness" value={student.weakness || ''} onChange={handleInputChange} placeholder="Weakness" />
            <input type="text" name="short_term_goals" value={student.short_term_goals || ''} onChange={handleInputChange} placeholder="Short Term Goals" />
            <input type="text" name="long_term_goals" value={student.long_term_goals || ''} onChange={handleInputChange} placeholder="Long Term Goals" />
            <input type="text" name="extra_curricular" value={student.extra_curricular || ''} onChange={handleInputChange} placeholder="Extra Curricular" />

            <button type="submit">Update</button>
        </form>
    );
};

export default StudentForm;
