const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Create users table
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )
`);

// Create doctors table
db.run(`
    CREATE TABLE IF NOT EXISTS doctors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        specialization TEXT,
        experience INTEGER,
        fees INTEGER
    )
`);

// Create appointments table
db.run(`
    CREATE TABLE IF NOT EXISTS appointments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        doctor_id INTEGER,
        appointment_date TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (doctor_id) REFERENCES doctors(id)
    )
`);

// Insert dummy doctors if table is empty
db.all('SELECT COUNT(*) as count FROM doctors', (err, rows) => {
    if (err) {
        console.error('Error checking doctors table:', err);
    } else if (rows[0].count === 0) {
        const doctors = [
            { name: "Dr. Rahul Sharma", specialization: "Cardiologist", experience: 15, fees: 800 },
            { name: "Dr. Neha Kapoor", specialization: "Dermatologist", experience: 10, fees: 600 },
            { name: "Dr. Ajay Verma", specialization: "Neurologist", experience: 12, fees: 900 },
            { name: "Dr. Priya Sen", specialization: "Dentist", experience: 8, fees: 500 },
            { name: "Dr. Vikram Rao", specialization: "Orthopedic", experience: 18, fees: 1000 }
        ];

        doctors.forEach(doc => {
            db.run(`INSERT INTO doctors (name, specialization, experience, fees) VALUES (?, ?, ?, ?)`, 
                [doc.name, doc.specialization, doc.experience, doc.fees]);
        });

        console.log('Dummy doctors inserted into database!');
    }
});

module.exports = db;
