const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get("/produkty", async (req, res) => {
  const result = await pool.query("SELECT * FROM produkty");
  res.json(result.rows);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API działa");
});
