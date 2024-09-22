
document.querySelector(".GetPlan").addEventListener("click", function() {
  fetch('/workout')
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          const resultsElement = document.querySelector('.ShowPlan');
          resultsElement.innerHTML = ''; // Clear previous results
          
          if (data.results && data.results.length > 0) {
              data.results.forEach(row => {
                  const rowElement = document.createElement('p');
                  rowElement.textContent = JSON.stringify(row);
                  resultsElement.appendChild(rowElement);
              });
          } else {
              resultsElement.textContent = 'No workout data found.';
          }
      })
      .catch(error => {
          console.error('Error:', error);
          document.querySelector('.ShowPlan').textContent = 'An error occurred while fetching the workout plan. Please try again later.';
      });
});
