# CSP451-CheckPoint1-RayChang

## Description
This repository is the submission for the CSP451 Week 1 Checkpoint. It demonstrates the fundamentals of version control, including creating repositories, managing commits, and working with GitHub. This project includes both a static website and RESTful API endpoints.

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies: `npm install`

## Usage

### Static Website
Open `index.html` in any web browser. Right-click the page and select **Inspect** to open the Developer Tools. Navigate to the **Console** tab to view the JavaScript output.

### API Server
1. Start the server: `npm start`
2. The server will run on `http://localhost:3000`
3. Access the API endpoints as documented below

## API Endpoints

### GET /api/health
Health check endpoint to verify the API is running.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-01-22T23:28:00.000Z",
  "uptime": 123.456
}
```

### GET /api/info
Get project information.

**Response:**
```json
{
  "project": "CSP451-CheckPoint1-RayChang",
  "description": "This repository is the submission for the CSP451 Week 1 Checkpoint",
  "course": "CSP451",
  "version": "1.0.0"
}
```

### GET /api/contact
Get contact information.

**Response:**
```json
{
  "name": "Ray Chang",
  "email": "yjchang61@gmail.com",
  "phone": "416-836-7823"
}
```

### POST /api/feedback
Submit feedback.

**Request Body:**
```json
{
  "name": "Your Name",
  "message": "Your feedback message"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Feedback received successfully",
  "data": {
    "name": "Your Name",
    "message": "Your feedback message",
    "timestamp": "2026-01-22T23:28:00.000Z"
  }
}
```

## Contributing
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License
MIT License