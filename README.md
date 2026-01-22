# CSP451-CheckPoint1-RayChang

## Description
This repository is the submission for the CSP451 Week 1 Checkpoint. It demonstrates the fundamentals of version control, including creating repositories, managing commits, and working with GitHub. The project now includes a database connection implementation using Node.js, Express, and SQLite.

## Features
- Simple web interface
- SQLite database integration
- RESTful API for database operations
- Visitor tracking system

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Starting the Server
To start the backend server with database connection:
```bash
npm start
```
The server will run on `http://localhost:3000` by default.

### Accessing the Application
1. Once the server is running, open your web browser and navigate to `http://localhost:3000`
2. The page will automatically connect to the database and display recent visitors
3. You can add new visitors using the input form on the page
4. Open the browser's Developer Tools (right-click → Inspect) and navigate to the **Console** tab to view the JavaScript output and database connection status

### API Endpoints
- `GET /api/health` - Check database connection status
- `GET /api/visitors` - Retrieve all visitors from the database
- `POST /api/visitors` - Add a new visitor (requires JSON body with `name` field)

## Project Structure
- `index.html` - Main HTML page with visitor form
- `script.js` - Frontend JavaScript with database interaction logic
- `style.css` - Styling for the web interface
- `server.js` - Express server setup
- `db.js` - Database connection module
- `package.json` - Node.js dependencies and scripts
- `database.db` - SQLite database file (auto-generated)

## Contributing
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License
MIT License