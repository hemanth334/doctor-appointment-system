const express = require('express');
const router = express.Router();
const db = require('../db');

// Signup
router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.run(query, [username, password], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Signup successful' });
    });
});

// Login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.get(query, [username, password], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(400).json({ message: 'Invalid credentials' });
        res.status(200).json({ message: 'Login successful', user: row });
    });
});

module.exports = router;
