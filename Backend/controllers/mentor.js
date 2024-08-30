// // Backend/controllers/mentor.js
// const express = require('express');
// const router = express.Router();
// const db = require('../config/db.js');

// // Get all students
// router.get('/', (req, res) => {
//     const query = 'SELECT * FROM student_details';
//     db.query(query, (err, results) => {
//         if (err) return res.status(500).json({ error: err.message });
//         res.json(results);
//     });
// });


// // Get student details by PRN - For mentors (read-only)
// router.get('/:prn', (req, res) => {
//     const prn = req.params.prn;
//     const query = 'SELECT * FROM student_details WHERE prn = ?'; 
//     db.query(query, [prn], (err, results) => {
//         if (err) return res.status(500).json({ error: err.message });
//         res.json(results[0]); // Mentor only reads data
//     });
// });

// // Delete student by PRN
// router.delete('/:prn', (req, res) => {
//     const prn = req.params.prn;
//     const query = 'DELETE FROM student_details WHERE prn = ?';
//     db.query(query, [prn], (err, results) => {
//         if (err) return res.status(500).json({ error: err.message });
//         if (results.affectedRows === 0) return res.status(404).json({ message: 'Student not found' });
//         res.json({ message: 'Student deleted successfully' });
//     });
// });

// module.exports = router;

// Backend/controllers/mentor.js
const db = require('../config/db.js');

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM student_details');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get student details by PRN
const getStudentByPRN = async (req, res) => {
    const prn = req.params.prn;
    try {
        const [results] = await db.query('SELECT * FROM student_details WHERE prn = ?', [prn]);
        res.json(results[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete student details
const deleteStudent = async (req, res) => {
    const prn = req.params.prn;
    try {
        const [results] = await db.query('DELETE FROM student_details WHERE prn = ?', [prn]);
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllStudents,
    getStudentByPRN,
    deleteStudent
};
