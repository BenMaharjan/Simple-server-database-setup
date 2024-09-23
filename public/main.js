
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
        const showPlanElement = document.querySelector('.ShowPlan');
        showPlanElement.textContent = JSON.stringify(data.data[0], null, 2);
        
            })
        })
      .catch(error => {
          console.error('Error:', error);
          document.querySelector('.ShowPlan').textContent = 'An error occurred while fetching the workout plan. Please try again later.';
      });

