const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Get project information
app.get('/api/info', (req, res) => {
    res.status(200).json({
        project: 'CSP451-CheckPoint1-RayChang',
        description: 'This repository is the submission for the CSP451 Week 1 Checkpoint',
        course: 'CSP451',
        version: '1.0.0'
    });
});

// Get contact information
app.get('/api/contact', (req, res) => {
    res.status(200).json({
        name: 'Ray Chang',
        email: 'yjchang61@gmail.com',
        phone: '416-836-7823'
    });
});

// Submit feedback endpoint
app.post('/api/feedback', (req, res) => {
    const { name, message } = req.body;
    
    if (!name?.trim() || !message?.trim()) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Name and message are required fields'
        });
    }
    
    // In a real application, this would save to a database
    res.status(201).json({
        success: true,
        message: 'Feedback received successfully',
        data: {
            name: name.trim(),
            message: message.trim(),
            timestamp: new Date().toISOString()
        }
    });
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested API endpoint does not exist'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API endpoints available at http://localhost:${PORT}/api`);
});
