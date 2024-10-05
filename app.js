// import express framework
import express from "express"
//import pool created in db/index.js
import { pool } from "./db/index.js";
// import cors package
import cors from "cors";

// creates express app
const app = express();

//sets port to port variable in env file
const PORT = process.env.PORT;

//enables parsing of JSON request bodies
app.use(express.json());

// enable CORS for all routes
app.use(cors());

//app.use(express.static("public"));

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

//create a post request at the /workout endpoint
app.post("/workout", async function(req,res) {

  //destructuring. equivalent to
  //const exercise = req.body.exercise;
  //const description = req.body.description;
  const {exercise, description} = req.body;

  if(!exercise || !description) {
    return res.status(400).json({error: "missing required fields"})
  }
    
  try {

    const result = await pool.query('INSERT INTO workout (exercise, description) VALUES ($1,$2) RETURNING *',
    [exercise, description]);
   
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error("Error executing query", err.stack)
    res.status(500).json({error: "Internal server error" })
  }
})


  