
document.querySelector(".GetPlan").addEventListener("click", function() {
  fetch('http://localhost:3000/workout')
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
        //console.log(data); 
        //console.log(data.data[1]);

        const array=data.data;  
   
        const keys = Object.keys(data.data[0]);
        
        //console.log(keys.length);
        //console.log(keys.join(" "));

        // create a table row (the coloumn) with the key property of the array as the header
        for(let i=1;i<keys.length; i++) {
        document.querySelector(`.tr${i}`).textContent = keys[i].toUpperCase();   
        }

        //array.map(function(array){ console.log(array)});
        console.log(array);

        for (let i=0;i<array.length;i++){
        // converts the first object in array into an array
        const newArray=Object.entries(array[i]);

        // removes the first key value pair from this array(ID)
        const slicedNewArray = newArray.slice(1);

        //return the array back into an object. This obeject no longer has the ID:num key value pair
        const newObject = Object.fromEntries(slicedNewArray);

        //returns the values only for the new object
        const newObjectValues = Object.values(newObject);

        console.log(newObjectValues);

        //Create a new table row 
        const newRow = document.createElement("tr");
        const newRowCol = document.createElement("td");
        const newRowCol2 = document.createElement("td");

        newRowCol.textContent = newObjectValues[0];
        newRow.appendChild(newRowCol);

        newRowCol2.textContent = newObjectValues[1];
        newRow.appendChild(newRowCol2);

        document.querySelector(".workoutTable").appendChild(newRow);
        }

        // const newRow = document.createElement("tr");
        // const newRowCol = document.createElement("td");
        // const newRowCol2 = document.createElement("td");

        // newRowCol.textContent = newObjectValues[0];
        // newRow.appendChild(newRowCol);

        // newRowCol2.textContent = newObjectValues[1];
        // newRow.appendChild(newRowCol2);

        // document.querySelector(".workoutTable").appendChild(newRow);

        //console.log(slicedNewArray);

        // for (let i=1; i<array.length; i++) {
        //     console.log(Object.values(array[i]));       
        // }

        // const newRow = document.createElement("tr");

        // const newRowCol1 = document.createElement("td")
        // newRowCol1.textContent=JSON.stringify(data.data[1].exercise,null,2);
        // newRow.appendChild(newRowCol1)

        // const newRowCol2 = document.createElement("td")
        // newRowCol2.textContent=JSON.stringify(data.data[1].description,null,2);
    //     // newRow.appendChild(newRowCol2)



    //     const newRow2 = document.createElement("tr");

    //    // newRow.textContent = JSON.stringify(data.data[1],null,2);
    //     newRow2.textContent = JSON.stringify(data.data[2].exercise)

    //     const table = document.querySelector(".workoutTable");
    //     table.appendChild(newRow);
    //     table.appendChild(newRow2)
        


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

