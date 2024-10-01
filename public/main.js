
document.querySelector(".GetPlan").addEventListener("click", function() {
  fetch('http://localhost:3000/workout')
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
        console.log(data); 
        
        const keys = Object.keys(data.data[0]);
        console.log(keys.join(" "));

        document.querySelector(".tr1").textContent = keys[1].toUpperCase();
        document.querySelector(".tr2").textContent = keys[2].toUpperCase();

        const newRow = document.createElement("tr");
        const newRow2 = document.createElement("tr");

        newRow.textContent = keys[1];
        newRow2.textContent = keys[1];

        const table = document.querySelector(".workoutTable");
        table.appendChild(newRow);
        table.appendChild(newRow2)
        


        // const showPlanElement = document.querySelector('.ShowPlan');
        // showPlanElement.textContent = JSON.stringify(keys[0], null, 2);
        
            })
      .catch(error => {
          console.error('Error:', error);
          document.querySelector('.ShowPlan').textContent = 'An error occurred while fetching the workout plan. Please try again later.';
      });
    })

     

// const express = require('express');
// const { Pool } = require('pg');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = 3000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // PostgreSQL connection
// const pool = new Pool({
//   user: 'your_username',
//   host: 'localhost',
//   database: 'your_database_name',
//   password: 'your_password',
//   port: 5432, // default PostgreSQL port
// });

// // Test the database connection
// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   } else {
//     console.log('Connected to database. Current time:', res.rows[0].now);
//   }
// });

// // Serve HTML form
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Handle form submission
// app.post('/register', async (req, res) => {
//   const { username, email, password } = req.body;

//   // In a real application, you should hash the password here
//   const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
  
//   try {
//     await pool.query(query, [username, email, password]);
//     res.status(200).send('User registered successfully');
//   } catch (error) {
//     console.error('Error inserting data:', error);
//     res.status(500).send('Error registering user');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

