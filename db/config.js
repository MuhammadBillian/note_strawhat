const mysql = require('mysql2');
require('dotenv').config();

// Konfigurasi koneksi database
const db = mysql.createPool({
    host: process.env.HOST || 'localhost',  // Default host: localhost
    user: process.env.USER || 'root',       // Default user: root
    password: process.env.PASSWORD || '12345', // Default password
    database: process.env.DATABASE || 'notes_db', // Default database
    waitForConnections: true,              // Mengatur pool agar menunggu koneksi tersedia
    connectionLimit: 10,                   // Maksimal jumlah koneksi dalam pool
    queueLimit: 0                          // Tidak ada batasan antrian
});

// Memeriksa koneksi
db.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Database connected!');
    }
});

module.exports = db;
