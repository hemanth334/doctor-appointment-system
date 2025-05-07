const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all doctors
router.get('/', (req, res) => {
    db.all('SELECT * FROM doctors', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(rows);
    });
});

// Get doctor details
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM doctors WHERE id = ?', [id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(row);
    });
});

module.exports = router;
