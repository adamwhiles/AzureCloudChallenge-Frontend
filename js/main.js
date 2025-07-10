// Get the span element by its class name
let span = document.getElementsByClassName("visit_count")[0];
span.textContent = "Loading Count...";
// Define a function to fetch the value from the endpoint
function fetchValue() {
  // Use the fetch API to make a GET request
  fetch(
    "https://func-heyitsadam.azurewebsites.net/api/http_trigger?code=cCe-Xdue2wSXFgQA7SmmMzKPOclW7q84N92jqAVywfg-AzFuDK4z6A=="
  )
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      // Update the span text with the data value
      span.textContent = data;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

// Call the function when the page loads
fetchValue();
