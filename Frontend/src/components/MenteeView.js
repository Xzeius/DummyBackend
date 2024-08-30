// // Frontend/src/components/MenteeDashboard.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StudentForm from './StudentForm';

// const MenteeDashboard = () => {
//     const [student, setStudent] = useState(null);
//     const [prn, setPrn] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const handlePrnSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setError(null);
//         try {
//             const response = await axios.get(`http://localhost:8800/mentee/${prn}`);
//             setStudent(response.data);
//         } catch (error) {
//             console.error('Error fetching student data:', error);
//             setError('Failed to fetch student data. Please try again.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h2>Mentee Dashboard</h2>
//             <form onSubmit={handlePrnSubmit}>
//                 <input
//                     type="text"
//                     value={prn}
//                     onChange={(e) => setPrn(e.target.value)}
//                     placeholder="Enter your PRN"
//                     required
//                 />
//                 <button type="submit" disabled={isLoading}>
//                     {isLoading ? 'Loading...' : 'Fetch My Data'}
//                 </button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {student && <StudentForm studentData={student} />}
//         </div>
//     );
// };

// export default MenteeDashboard;

// Frontend/src/components/MenteeView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

const MenteeView = () => {
    const [student, setStudent] = useState({
        prn: '', // Add PRN to the initial state
        fullname: '',
        date_of_birth: '',
        branch: '',
        photo: '',
        year_of_admission: '',
        mother_tongue: '',
        present_address: '',
        mobile_number: '',
        landline: '',
        email: '',
        blood_group: '',
        father_name: '',
        father_occupation: '',
        father_mobile_number: '',
        mother_name: '',
        mother_occupation: '',
        mother_mobile_number: '',
        ssc_percentage: '',
        ssc_medium: '',
        ssc_board: '',
        hsc_or_diploma_percentage: '',
        hsc_or_diploma_medium: '',
        hsc_or_diploma_board: '',
        cet_percentile: '',
        jee_percentile: '',
        hobbies: '',
        strengths: '',
        weakness: '',
        short_term_goals: '',
        long_term_goals: '',
        extra_curricular: ''
    });

    const { prn } = useParams(); // Get the PRN from the URL

    useEffect(() => {
        if (prn) {
            // Fetch the student's details when component mounts
            axios.get(`http://localhost:8800/students/${prn}`)
                .then(response => {
                    const studentData = response.data;

                // Format the date_of_birth if it exists
                if (studentData.date_of_birth) {
                    const date = new Date(studentData.date_of_birth);
                    const formattedDate = date.toISOString().split('T')[0]; // 'YYYY-MM-DD' format
                    studentData.date_of_birth = formattedDate;
                }
                    setStudent(response.data);
                })
                .catch(error => {
                    console.error('Error fetching student data:', error);
                });
        }
    }, [prn]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudent(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (prn) {
            // Update existing student details
            axios.put(`http://localhost:8800/students/${prn}`, student)
                .then(response => {
                    alert('Student details updated successfully');
                })
                .catch(error => {
                    console.error('Error updating student data:', error);
                });
        } else {
            // Add new student details
            
            axios.post('http://localhost:8800/students', student)
                .then(response => {
                    alert('New student added successfully');
                })
                .catch(error => {
                    console.error('Error adding student:', error);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            
        <h2>{prn ? 'Student Details' : 'Add New Student'}</h2>
    
        {/* PRN input field only when adding a new student */}
        {!prn && (
            <div>
                <label htmlFor="prn">PRN:</label>
                <input
                    type="text"
                    name="prn"
                    value={student.prn}
                    onChange={handleInputChange}
                    placeholder="Enter PRN"
                    required
                />
            </div>
        )}
    
        {/* Form fields for student details */}
        <div>
            <label htmlFor="fullname">Full Name:</label>
            <input
                type="text"
                name="fullname"
                value={student.fullname}
                onChange={handleInputChange}
                placeholder="Enter Full Name"
                required
            />
        </div>
    
        <div>
            <label htmlFor="date_of_birth">Date of Birth:</label>
            <input
                type="date"
                name="date_of_birth"
                value={student.date_of_birth}
                onChange={handleInputChange}
                required
            />
        </div>
    
        <div>
            <label htmlFor="branch">Branch:</label>
            <input
                type="text"
                name="branch"
                value={student.branch}
                onChange={handleInputChange}
                placeholder="Enter Branch"
                required
            />
        </div>
    
        <div>
            <label htmlFor="photo">Photo URL:</label>
            <input
                type="text"
                name="photo"
                value={student.photo}
                onChange={handleInputChange}
                placeholder="Enter Photo URL"
            />
        </div>
    
        <div>
            <label htmlFor="year_of_admission">Year of Admission:</label>
            <input
                type="text"
                name="year_of_admission"
                value={student.year_of_admission}
                onChange={handleInputChange}
                placeholder="Enter Year of Admission"
            />
        </div>
    
        <div>
            <label htmlFor="mother_tongue">Mother Tongue:</label>
            <input
                type="text"
                name="mother_tongue"
                value={student.mother_tongue}
                onChange={handleInputChange}
                placeholder="Enter Mother Tongue"
            />
        </div>
    
        <div>
            <label htmlFor="present_address">Present Address:</label>
            <input
                type="text"
                name="present_address"
                value={student.present_address}
                onChange={handleInputChange}
                placeholder="Enter Present Address"
            />
        </div>
    
        <div>
            <label htmlFor="mobile_number">Mobile Number:</label>
            <input
                type="text"
                name="mobile_number"
                value={student.mobile_number}
                onChange={handleInputChange}
                placeholder="Enter Mobile Number"
            />
        </div>
    
        <div>
            <label htmlFor="landline">Landline:</label>
            <input
                type="text"
                name="landline"
                value={student.landline}
                onChange={handleInputChange}
                placeholder="Enter Landline"
            />
        </div>
    
        <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                value={student.email}
                onChange={handleInputChange}
                placeholder="Enter Email"
            />
        </div>
    
        <div>
            <label htmlFor="blood_group">Blood Group:</label>
            <input
                type="text"
                name="blood_group"
                value={student.blood_group}
                onChange={handleInputChange}
                placeholder="Enter Blood Group"
            />
        </div>
    
        {/* Parent Details */}
        <h2>Parent Details</h2>
    
        <div>
            <label htmlFor="father_name">Father's Name:</label>
            <input
                type="text"
                name="father_name"
                value={student.father_name}
                onChange={handleInputChange}
                placeholder="Enter Father's Name"
            />
        </div>
    
        <div>
            <label htmlFor="father_occupation">Father's Occupation:</label>
            <input
                type="text"
                name="father_occupation"
                value={student.father_occupation}
                onChange={handleInputChange}
                placeholder="Enter Father's Occupation"
            />
        </div>
    
        <div>
            <label htmlFor="father_mobile_number">Father's Mobile Number:</label>
            <input
                type="text"
                name="father_mobile_number"
                value={student.father_mobile_number}
                onChange={handleInputChange}
                placeholder="Enter Father's Mobile Number"
            />
        </div>
    
        <div>
            <label htmlFor="mother_name">Mother's Name:</label>
            <input
                type="text"
                name="mother_name"
                value={student.mother_name}
                onChange={handleInputChange}
                placeholder="Enter Mother's Name"
            />
        </div>
    
        <div>
            <label htmlFor="mother_occupation">Mother's Occupation:</label>
            <input
                type="text"
                name="mother_occupation"
                value={student.mother_occupation}
                onChange={handleInputChange}
                placeholder="Enter Mother's Occupation"
            />
        </div>
    
        <div>
            <label htmlFor="mother_mobile_number">Mother's Mobile Number:</label>
            <input
                type="text"
                name="mother_mobile_number"
                value={student.mother_mobile_number}
                onChange={handleInputChange}
                placeholder="Enter Mother's Mobile Number"
            />
        </div>
    
        {/* Education Details */}
        <h2>Education Details</h2>
    
        <div>
            <label htmlFor="ssc_percentage">SSC Percentage:</label>
            <input
                type="number"
                name="ssc_percentage"
                value={student.ssc_percentage}
                onChange={handleInputChange}
                placeholder="Enter SSC Percentage"
            />
        </div>
    
        <div>
            <label htmlFor="ssc_medium">SSC Medium:</label>
            <input
                type="text"
                name="ssc_medium"
                value={student.ssc_medium}
                onChange={handleInputChange}
                placeholder="Enter SSC Medium"
            />
        </div>
    
        <div>
            <label htmlFor="ssc_board">SSC Board:</label>
            <input
                type="text"
                name="ssc_board"
                value={student.ssc_board}
                onChange={handleInputChange}
                placeholder="Enter SSC Board"
            />
        </div>
    
        <div>
            <label htmlFor="hsc_or_diploma_percentage">HSC/Diploma Percentage:</label>
            <input
                type="number"
                name="hsc_or_diploma_percentage"
                value={student.hsc_or_diploma_percentage}
                onChange={handleInputChange}
                placeholder="Enter HSC/Diploma Percentage"
            />
        </div>
    
        <div>
            <label htmlFor="hsc_or_diploma_medium">HSC/Diploma Medium:</label>
            <input
                type="text"
                name="hsc_or_diploma_medium"
                value={student.hsc_or_diploma_medium}
                onChange={handleInputChange}
                placeholder="Enter HSC/Diploma Medium"
            />
        </div>
    
        <div>
            <label htmlFor="hsc_or_diploma_board">HSC/Diploma Board:</label>
            <input
                type="text"
                name="hsc_or_diploma_board"
                value={student.hsc_or_diploma_board}
                onChange={handleInputChange}
                placeholder="Enter HSC/Diploma Board"
            />
        </div>
    
        <div>
            <label htmlFor="cet_percentile">CET Percentile:</label>
            <input
                type="number"
                name="cet_percentile"
                value={student.cet_percentile}
                onChange={handleInputChange}
                placeholder="Enter CET Percentile"
            />
        </div>
    
        <div>
            <label htmlFor="jee_percentile">JEE Percentile:</label>
            <input
                type="number"
                name="jee_percentile"
                value={student.jee_percentile}
                onChange={handleInputChange}
                placeholder="Enter JEE Percentile"
            />
        </div>
    
        {/* Personal Details */}
        <h2>Personal Details</h2>
    
        <div>
            <label htmlFor="hobbies">Hobbies:</label>
            <input
                type="text"
                name="hobbies"
                value={student.hobbies}
                onChange={handleInputChange}
                placeholder="Enter Hobbies"
            />
        </div>
    
        <div>
            <label htmlFor="strengths">Strengths:</label>
            <input
                type="text"
                name="strengths"
                value={student.strengths}
                onChange={handleInputChange}
                placeholder="Enter Strengths"
            />
        </div>
    
        <div>
            <label htmlFor="weakness">Weakness:</label>
            <input
                type="text"
                name="weakness"
                value={student.weakness}
                onChange={handleInputChange}
                placeholder="Enter Weakness"
            />
        </div>
    
        <div>
            <label htmlFor="short_term_goals">Short Term Goals:</label>
            <input
                type="text"
                name="short_term_goals"
                value={student.short_term_goals}
                onChange={handleInputChange}
                placeholder="Enter Short Term Goals"
            />
        </div>
    
        <div>
            <label htmlFor="long_term_goals">Long Term Goals:</label>
            <input
                type="text"
                name="long_term_goals"
                value={student.long_term_goals}
                onChange={handleInputChange}
                placeholder="Enter Long Term Goals"
            />
        </div>
    
        <div>
            <label htmlFor="extra_curricular">Extra Curricular:</label>
            <input
                type="text"
                name="extra_curricular"
                value={student.extra_curricular}
                onChange={handleInputChange}
                placeholder="Enter Extra Curricular"
            />
        </div>
    
        <button type="submit">{prn ? 'Update' : 'Add'}</button>
    </form>
    
        // <form onSubmit={handleSubmit}>
        //     <h2>{prn ? 'Student Details' : 'Add New Student'}</h2>
        //     <input type="text" name="fullname" value={student.fullname || ''} onChange={handleInputChange} placeholder="Full Name" />
        //     <input type="date" name="date_of_birth" value={student.date_of_birth ? student.date_of_birth.slice(0, 10) : ''} onChange={handleInputChange} placeholder="Date of Birth" />
        //     <input type="text" name="branch" value={student.branch || ''} onChange={handleInputChange} placeholder="Branch" />
        //     <input type="text" name="photo" value={student.photo || ''} onChange={handleInputChange} placeholder="Photo URL" />
        //     <input type="text" name="year_of_admission" value={student.year_of_admission || ''} onChange={handleInputChange} placeholder="Year of Admission" />
        //     <input type="text" name="mother_tongue" value={student.mother_tongue || ''} onChange={handleInputChange} placeholder="Mother Tongue" />
        //     <input type="text" name="present_address" value={student.present_address || ''} onChange={handleInputChange} placeholder="Present Address" />
        //     <input type="text" name="mobile_number" value={student.mobile_number || ''} onChange={handleInputChange} placeholder="Mobile Number" />
        //     <input type="text" name="landline" value={student.landline || ''} onChange={handleInputChange} placeholder="Landline" />
        //     <input type="email" name="email" value={student.email || ''} onChange={handleInputChange} placeholder="Email" />
        //     <input type="text" name="blood_group" value={student.blood_group || ''} onChange={handleInputChange} placeholder="Blood Group" />

        //     <h2>Parent Details</h2>
        //     <input type="text" name="father_name" value={student.father_name || ''} onChange={handleInputChange} placeholder="Father's Name" />
        //     <input type="text" name="father_occupation" value={student.father_occupation || ''} onChange={handleInputChange} placeholder="Father's Occupation" />
        //     <input type="text" name="father_mobile_number" value={student.father_mobile_number || ''} onChange={handleInputChange} placeholder="Father's Mobile Number" />
        //     <input type="text" name="mother_name" value={student.mother_name || ''} onChange={handleInputChange} placeholder="Mother's Name" />
        //     <input type="text" name="mother_occupation" value={student.mother_occupation || ''} onChange={handleInputChange} placeholder="Mother's Occupation" />
        //     <input type="text" name="mother_mobile_number" value={student.mother_mobile_number || ''} onChange={handleInputChange} placeholder="Mother's Mobile Number" />

        //     <h2>Education Details</h2>
        //     <input type="number" name="ssc_percentage" value={student.ssc_percentage || ''} onChange={handleInputChange} placeholder="SSC Percentage" />
        //     <input type="text" name="ssc_medium" value={student.ssc_medium || ''} onChange={handleInputChange} placeholder="SSC Medium" />
        //     <input type="text" name="ssc_board" value={student.ssc_board || ''} onChange={handleInputChange} placeholder="SSC Board" />
        //     <input type="number" name="hsc_or_diploma_percentage" value={student.hsc_or_diploma_percentage || ''} onChange={handleInputChange} placeholder="HSC/Diploma Percentage" />
        //     <input type="text" name="hsc_or_diploma_medium" value={student.hsc_or_diploma_medium || ''} onChange={handleInputChange} placeholder="HSC/Diploma Medium" />
        //     <input type="text" name="hsc_or_diploma_board" value={student.hsc_or_diploma_board || ''} onChange={handleInputChange} placeholder="HSC/Diploma Board" />
        //     <input type="number" name="cet_percentile" value={student.cet_percentile || ''} onChange={handleInputChange} placeholder="CET Percentile" />
        //     <input type="number" name="jee_percentile" value={student.jee_percentile || ''} onChange={handleInputChange} placeholder="JEE Percentile" />

        //     <h2>Personal Details</h2>
        //     <input type="text" name="hobbies" value={student.hobbies || ''} onChange={handleInputChange} placeholder="Hobbies" />
        //     <input type="text" name="strengths" value={student.strengths || ''} onChange={handleInputChange} placeholder="Strengths" />
        //     <input type="text" name="weakness" value={student.weakness || ''} onChange={handleInputChange} placeholder="Weakness" />
        //     <input type="text" name="short_term_goals" value={student.short_term_goals || ''} onChange={handleInputChange} placeholder="Short Term Goals" />
        //     <input type="text" name="long_term_goals" value={student.long_term_goals || ''} onChange={handleInputChange} placeholder="Long Term Goals" />
        //     <input type="text" name="extra_curricular" value={student.extra_curricular || ''} onChange={handleInputChange} placeholder="Extra Curricular" />

        //     <button type="submit">{prn ? 'Update' : 'Add'}</button>
        // </form>
        
    );
};

export default MenteeView;
