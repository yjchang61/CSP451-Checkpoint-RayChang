// Authentication logic for the application

// Demo user credentials (in a real application, this would be handled server-side)
const VALID_USERS = {
    'admin': 'password123',
    'user': 'user123'
};

// Check if user is authenticated
function isAuthenticated() {
    return localStorage.getItem('isAuthenticated') === 'true';
}

// Check if user is authenticated and get username
function getCurrentUser() {
    if (isAuthenticated()) {
        return localStorage.getItem('username');
    }
    return null;
}

// Login function
function login(username, password) {
    // Check if credentials are valid
    if (VALID_USERS[username] && VALID_USERS[username] === password) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('loginTime', new Date().toISOString());
        return { success: true };
    }
    return { success: false, error: 'Invalid username or password' };
}

// Logout function
function logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('loginTime');
    window.location.href = 'login.html';
}

// Protect page - redirect to login if not authenticated
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
    }
}

// Handle login form submission (only runs on login.html)
if (document.getElementById('loginForm')) {
    // Check if already logged in
    if (isAuthenticated()) {
        window.location.href = 'index.html';
    }

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');
        
        const result = login(username, password);
        
        if (result.success) {
            console.log('Login successful for user:', username);
            window.location.href = 'index.html';
        } else {
            errorMessage.textContent = result.error;
            errorMessage.style.display = 'block';
            console.log('Login failed:', result.error);
        }
    });
}
