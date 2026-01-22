const express = require('express');
const cors = require('cors');
const path = require('path');
const { getAllVisitors, addVisitor } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public directory

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
    
    // Validate input
    if (!name || typeof name !== 'string') {
        return res.status(400).json({ error: 'Name is required and must be a string' });
    }
    
    // Sanitize and validate length
    const sanitizedName = name.trim();
    if (sanitizedName.length === 0) {
        return res.status(400).json({ error: 'Name cannot be empty' });
    }
    if (sanitizedName.length > 100) {
        return res.status(400).json({ error: 'Name is too long (max 100 characters)' });
    }
    
    addVisitor(sanitizedName, (err, visitor) => {
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
