import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';

const {Client} =pkg;  // Import PostgreSQL client for CockroachDB

const __filename = fileURLToPath(import.meta.url);  // Get current file path
const __dirname = path.dirname(__filename);  // Get current directory path

const app = express();

// Middleware
app.use(bodyParser.json());  // Middleware to parse JSON request bodies

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// CockroachDB connection string
const connectionString = 'postgresql://kaushik:Ju2BlwH3FarRqPeMyoJztg@grumpy-manatee-5344.j77.aws-ap-south-1.cockroachlabs.cloud:26257/CabMatedb?sslmode=verify-full';

// CockroachDB client setup using the connection string
const client = new Client({
  connectionString: connectionString,  // Pass the connection string
});

// Connect to CockroachDB
client.connect((err) => {
  if (err) {
    console.error('Error connecting to CockroachDB:', err);
    return;
  }
  console.log('Connected to CockroachDB');
});

app.post('/signup', async (req, res) => {
  const { email, password, first_name, last_name, phone_number } = req.body;

  // Validate request body
  if (!email || !password || !first_name || !last_name || !phone_number) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if user already exists
    const existingUser = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Insert user into the database
    await client.query(
      'INSERT INTO users (email, password, first_name, last_name, phone_number) VALUES ($1, $2, $3, $4, $5)',
      [email, password, first_name, last_name, phone_number]
    );

    res.status(201).json({ success: true, message: 'Signup successful' });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'Database error: ' + err.message });
  }
});

// Login route
app.post('/login', (req, res) => {
  console.log('Received login request with:', req.body);  // Log the request body
  const { email, password } = req.body;
  
  // Now proceed with your user authentication logic...
  client.query(
    'SELECT * FROM users WHERE email = $1 AND password = $2',
    [email, password],
    (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).send('Database error');
      }

      if (result.rows.length === 0) {
        return res.status(400).json({ success: false, message: 'Invalid email or password' });
      }

      // User found, login successful
      return res.status(200).json({ success: true, message: 'Login successful' });
    }
  );
});


// Fallback route for SPA (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = 3000;  // Default CockroachDB port
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
