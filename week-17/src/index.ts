/*
import { Client } from "pg";

const client = new Client({
  host: "localhost", // Use "localhost" instead of your machine name
  port: 5432,
  database: "postgres", // Default DB name (not table name)
  user: "postgres",
  password: "root", // or whatever your actual password is
});

// Function to get all the data from users table
async function getUsers() {
  const res = await client.query("SELECT * FROM users;"); // ✅ Await query
  console.log(res.rows); // ✅ Display results
  return res.rows;
}

async function insertUser() {
  const insertQuery = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING id;
  `;

  const values = ["randomPunjab", "randomPB@email.com", "random1234"];

  const insertResponse = await client.query(insertQuery, values);
  console.log(insertResponse);
  return insertResponse.rows[0].id;
}

async function getAddresses() {
  // const usersResponse = await getUsers();
  // if (!usersResponse || usersResponse.length === 0) {
  //   throw new Error("No users found");
  // }

  try {
    await client.query("BEGIN");
    
    const insertResponse = await insertUser();
    
    const addressInsertQuery = `
    INSERT INTO addresses (city, country, street, pincode, user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `;
    const values = ["Punjab", "India", "Amritsar", 999999, insertResponse];
    const addressInsertResponse = await client.query(addressInsertQuery, values);
    console.log(addressInsertResponse.rows);
    
    await client.query("COMMIT");
  } catch (err) {
    console.error("Error during transaction:", err);
    await client.query("ROLLBACK");
  }
}

async function main() {
  try {
    await client.connect();
    await getAddresses();
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    client.end();
  }
}

main();
*/

// Suppose when you make a UPI payment, the funds are deducted from one account and added to another.
// If the update happens in one account but not in the other, this is where transactions come into play.
// A transaction ensures that both accounts are updated, or neither account is updated to avoid inconsistencies.

// Similarly, transactions are useful for running a bunch of queries in sequence.
// For example, if a foreign key constraint is violated in one query, only part of the database will be updated.
// Instead of allowing partial updates, you wrap the queries in a transaction, ensuring they either all succeed or none execute.

import { Client } from "pg";
import express, { response } from "express";

// Creating an Express application instance
const app = express();
// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Creating a PostgreSQL client instance with the database connection URL
const pgClient = new Client({
  host: "localhost", // Use "localhost" instead of your machine name
  port: 5432,
  database: "postgres", // Default DB name (not table name)
  user: "postgres",
  password: "root", // or whatever your actual password is
});

pgClient.connect();

// API endpoint for user signup
app.post("/signup", async (req, res) => {
  // Extracting user details from the request body
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const city = req.body.city;
  const country = req.body.country;
  const street = req.body.street;
  const pincode = req.body.pincode;

  try {
    // Connecting to the PostgreSQL database
    await pgClient.connect();

    // Ensuring the 'users' table exists, or creating it if not
    await pgClient.query(
      `CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );`
    );

    // Ensuring the 'addresses' table exists, or creating it if not
    await pgClient.query(
      `CREATE TABLE IF NOT EXISTS addresses (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                city VARCHAR(100) NOT NULL,
                country VARCHAR(100) NOT NULL,
                street VARCHAR(255) NOT NULL,
                pincode VARCHAR(20),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );`
    );

    // Query to insert user data into the 'users' table
    const insertQuery = `INSERT INTO users(username, email, password) VALUES ($1, $2, $3) RETURNING id;`;

    // Query to insert address data into the 'addresses' table
    const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;

    // Start a database transaction
    await pgClient.query("BEGIN;");

    // Insert user data and get the newly created user's ID
    const response = await pgClient.query(insertQuery, [
      username,
      email,
      password,
    ]);
    const userId = response.rows[0].id; // Extract the user ID from the insert response

    // Insert address data linked to the user ID
    await pgClient.query(addressQuery, [
      city,
      country,
      street,
      pincode,
      userId,
    ]);

    // Commit the transaction to make the changes permanent
    await pgClient.query("COMMIT;");

    // Sending a success response to the client
    res.json({
      message: "You have signed up successfully",
    });
  } catch (error) {
    // Logging and handling errors
    console.log(error);

    // Rolling back the transaction if any query fails to prevent partial updates
    await pgClient.query("ROLLBACK;");

    // Sending an error response to the client
    res.status(400).json({
      message: "Error while signing up",
    });
  } finally {
    await pgClient.end();
  }
});

app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  // Bad Approach
  /*
  const query1 = `SELECT username, email FROM users WHERE id = $1`;
  const response1 = await pgClient.query(query1, [id]);

  const query2 = `SELECT * FROM addresses WHERE user_id = $1`;
  const resposne2 = await pgClient.query(query2, [id]);
  */

  try {
    const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
      FROM users
      JOIN addresses ON users.id = addresses.user_id
      WHERE users.id = $1;
    `;
    const response = await pgClient.query(query, [id]);

    if (response.rows.length > 0) {
      res.json({
        res:response.rows
      });
      return;
    } else {
      res.json({res:"No user or address found"});
      return null;
    }
  } catch (err) {
    console.error(`Error during fetching user and address:${err}`);
    throw err;
  } finally {
    await pgClient.end();
  }
});

// Starting the server to listen on port 3000
app.listen(3000, () => console.log(`Server running on 3000`));

// Overall Code Explanation:
// This code sets up an Express server with an API endpoint for user signup. The user data (username, password, email)
// and address details (city, country, street, pincode) are inserted into the 'users' and 'addresses' tables in the PostgreSQL database.
// Transactions are used to ensure that either all operations (user and address insertions) are successfully performed
// or none of them are applied. This avoids scenarios where the user table is updated but the address table isn't,
// preventing inconsistent data states. If any error occurs, the transaction is rolled back, ensuring database integrity.
