const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'rent-sys' 
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Rent room endpoint
app.post('/rent-room', (req, res) => {
    const roomId = req.body.roomId;

    // Update the room's availability in the database
    db.query('UPDATE rooms SET availability_status = ? WHERE id = ?', ['Rented', roomId], (error, results) => {
        if (error) {
            return res.status(500).send('Error updating room status');
        }
        res.send('Room rented successfully');
    });
});

const PORT = process.env.PORT || 3307;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});