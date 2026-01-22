// Outputting to the console as required by the assignment
console.log("Welcome to CSP451 Week 1");
console.log("The script.js file has loaded successfully.");

// Database connection demo
const API_URL = 'http://localhost:3000/api';

// Check database connection health
async function checkDatabaseConnection() {
    try {
        const response = await fetch(`${API_URL}/health`);
        const data = await response.json();
        console.log('Database Status:', data.message);
        return true;
    } catch (error) {
        console.log('Database connection check failed:', error.message);
        return false;
    }
}

// Fetch all visitors from database
async function fetchVisitors() {
    try {
        const response = await fetch(`${API_URL}/visitors`);
        const visitors = await response.json();
        console.log('Visitors from database:', visitors);
        displayVisitors(visitors);
    } catch (error) {
        console.error('Error fetching visitors:', error);
    }
}

// Add a new visitor to database
async function addNewVisitor(name) {
    try {
        const response = await fetch(`${API_URL}/visitors`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        const visitor = await response.json();
        console.log('New visitor added:', visitor);
        fetchVisitors(); // Refresh the list
    } catch (error) {
        console.error('Error adding visitor:', error);
    }
}

// Display visitors on the page
function displayVisitors(visitors) {
    const visitorsList = document.getElementById('visitors-list');
    if (visitorsList) {
        visitorsList.innerHTML = '<h3>Recent Visitors:</h3>';
        if (visitors.length === 0) {
            visitorsList.innerHTML += '<p>No visitors yet.</p>';
        } else {
            const ul = document.createElement('ul');
            visitors.forEach(visitor => {
                const li = document.createElement('li');
                li.textContent = `${visitor.name} - ${new Date(visitor.visit_time).toLocaleString()}`;
                ul.appendChild(li);
            });
            visitorsList.appendChild(ul);
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Checking database connection...');
    const isConnected = await checkDatabaseConnection();
    
    if (isConnected) {
        fetchVisitors();
    }
});