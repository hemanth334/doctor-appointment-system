const express = require('express');
const router = express.Router();
const db = require('../db');

// Book appointment
router.post('/', (req, res) => {
    const { user_id, doctor_id, appointment_date } = req.body;
    const query = 'INSERT INTO appointments (user_id, doctor_id, appointment_date) VALUES (?, ?, ?)';
    db.run(query, [user_id, doctor_id, appointment_date], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Appointment booked successfully' });
    });
});

module.exports = router;
