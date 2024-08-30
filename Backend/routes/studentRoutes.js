// Backend/routes/studentRoutes.js
const express = require('express');
const studentController = require('../controllers/student');

const router = express.Router();

// Get student details by PRN
router.get('/:prn', studentController.getStudentByPRN);

// Add new student details
router.post('/', studentController.addStudent);

// Update student details
router.put('/:prn', studentController.updateStudent);

// Delete student details
router.delete('/:prn', studentController.deleteStudent);

module.exports = router;
