const express = require('express');
const router = express.Router();
const db = require('../config/db.js');

// Get all students
router.get('/', (req, res) => {
    const query = 'SELECT * FROM student_details';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Get student details by PRN
router.get('/:prn', (req, res) => {
    const prn = req.params.prn;
    const query = 'SELECT * FROM student_details WHERE prn = ?';
    db.query(query, [prn], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
});

// Add new student details
router.post('/', (req, res) => {
    const newStudent = req.body;

    // Convert date_of_birth to 'YYYY-MM-DD' if it's provided
    if (newStudent.date_of_birth) {
        const date = new Date(newStudent.date_of_birth);
        const formattedDate = date.toISOString().split('T')[0]; // 'YYYY-MM-DD' format
        newStudent.date_of_birth = formattedDate;
    }

    // Insert new student details into the database
    const query = 'INSERT INTO student_details SET ?';
    db.query(query, newStudent, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).send('Student details added');
    });
});

// Update student details
router.put('/:prn', (req, res) => {
    const prn = req.params.prn;
    let updatedStudent = req.body;

    // Convert date_of_birth to 'YYYY-MM-DD' if it's provided
    if (updatedStudent.date_of_birth) {
        const date = new Date(updatedStudent.date_of_birth);
        const formattedDate = date.toISOString().split('T')[0]; // 'YYYY-MM-DD' format
        updatedStudent.date_of_birth = formattedDate;
    }

    const query = 'UPDATE student_details SET ? WHERE prn = ?';
    db.query(query, [updatedStudent, prn], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.send('Student details updated');
    });
});


// Delete student details
router.delete('/:prn', (req, res) => {
    const prn = req.params.prn;
    const query = 'DELETE FROM student_details WHERE prn = ?';
    db.query(query, [prn], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.send('Student details deleted');
    });
});

module.exports = router;
