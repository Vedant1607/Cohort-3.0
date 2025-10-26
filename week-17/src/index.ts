import { Client } from "pg";

const client = new Client({
  host: "localhost",      // Use "localhost" instead of your machine name
  port: 5432,
  database: "postgres",   // Default DB name (not table name)
  user: "postgres",
  password: "root",       // or whatever your actual password is
});

async function main() {
  try {
    await client.connect();                     // ✅ Await connection
    const res = await client.query("SELECT * FROM users;"); // ✅ Await query
    console.log(res.rows);                      // ✅ Display results
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.end();                         // ✅ Close connection
  }
}

main();
