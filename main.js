// Get the span element by its class name
let span = document.getElementsByClassName("visit_count")[0];

// Define a function to fetch the value from the endpoint
function fetchValue() {
  // Use the fetch API to make a GET request
  fetch("https://app-heyitsadam.azurewebsites.net/api/http_trigger?code=XYsh4VlO4BnmUQ-hZRcbODcc84pWg8bZKhMKMtM2LtyfAzFuSYSwUQ==")
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      // Update the span text with the data value
      span.textContent = data;
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}

// Call the function when the page loads
fetchValue();
