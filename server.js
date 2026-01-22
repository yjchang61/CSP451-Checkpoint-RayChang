const express = require('express');
const cors = require('cors');
const path = require('path');
const { getAllVisitors, addVisitor } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files

// API Routes

// Get all visitors
app.get('/api/visitors', (req, res) => {
    getAllVisitors((err, visitors) => {
        if (err) {
            res.status(500).json({ error: 'Failed to fetch visitors' });
        } else {
            res.json(visitors);
        }
    });
});

// Add a new visitor
app.post('/api/visitors', (req, res) => {
    const { name } = req.body;
    
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    
    addVisitor(name, (err, visitor) => {
        if (err) {
            res.status(500).json({ error: 'Failed to add visitor' });
        } else {
            res.status(201).json(visitor);
        }
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Database connection is active' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Database connection established`);
});
