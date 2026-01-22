const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database file path
const dbPath = path.join(__dirname, 'database.db');

// Create and connect to the database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to SQLite database');
        initializeDatabase();
    }
});

// Initialize database with sample table
function initializeDatabase() {
    db.run(`
        CREATE TABLE IF NOT EXISTS visitors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            visit_time DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Database table initialized');
        }
    });
}

// Get all visitors
function getAllVisitors(callback) {
    db.all('SELECT * FROM visitors ORDER BY visit_time DESC', [], (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
}

// Add a new visitor
function addVisitor(name, callback) {
    db.run('INSERT INTO visitors (name) VALUES (?)', [name], function(err) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, { id: this.lastID, name: name });
        }
    });
}

// Close database connection
function closeDatabase() {
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err.message);
        } else {
            console.log('Database connection closed');
        }
    });
}

module.exports = {
    db,
    getAllVisitors,
    addVisitor,
    closeDatabase
};
