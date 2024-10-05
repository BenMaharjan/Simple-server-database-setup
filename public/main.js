
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

    })
    .catch(error => {
        console.error('Error:', error);
        document.querySelector('.ShowPlan').textContent = 'An error occurred while fetching the workout plan. Please try again later.';
    });
  })

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("exerciseForm").addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData(event.target)
        // const exInput = document.getElementById('exercise');
        // const desInput = document.getElementById('description');
        // console.log('Exercise:', exercise.value);
        // console.log('Description:', description.value);
        const formObject = Object.fromEntries(formData);                
        // Log the form data as an object
        console.log('Form data as object:', formObject);
        // Log the raw FormData
        console.log('Raw FormData:', formData);

         fetch('http://localhost:3000/workout', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject)
                })
            .then(res=> {
                if(!res.ok) {
                    throw new Error(res.status)
                }
                return res.json();
            })
            .then(data => { console.log(data)})
            .catch(error => {
                console.error('Error:', error);
            });

        });
    })

  
