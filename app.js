// import express framework
import express from "express"
//import pool created in db/index.js
import { pool } from "./db/index.js";

// creates express app
const app = express();

//sets port to port variable in env file
const PORT = process.env.PORT;

//enables parsing of JSON request bodies
app.use(express.json());

//starts  server listening to port number in env file
app.listen(PORT, function() {
  console.log(`server listening on ${PORT}`)
});

// defines a root at root directory
app.get("/", function(req,res){
  res.status(200).send("working")
});

//defines a root at /workout and displays all results from workout table in the database
app.get("/workout", async function(req,res) {
  const SQLQUERY = `SELECT * FROM workout`;
  const result = await pool.query(SQLQUERY)
  res.status(200).json({
    status: "success",
    data: result.rows
  });
});

  