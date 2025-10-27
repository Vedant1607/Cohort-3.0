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
