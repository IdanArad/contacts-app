const { Pool } = require('pg');
require('dotenv').config(); // To read from the .env file

// Create a new pool instance with configuration from .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Function to query the database
const queryDatabase = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to the database');

    // Example query
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);

    client.release(); // Release the client back to the pool
  } catch (err) {
    console.error('Error connecting to the database', err.stack);
  }
};

// Call the function
queryDatabase();
