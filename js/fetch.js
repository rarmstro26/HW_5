
const url = "https://rarmstro26.github.io/HW_5/models/education.json"

// Wait for window load - setup click here button to launch fetch function
window.onload = function () {
    let clickData = document.getElementById('main-button');
    // Button, when clicked, run getData function
    clickData.onclick = getData;
}

// Fetch function to retrieve/handle response and display educationd ata
function getData() {
    // alert("Function started!");
    console.log("Function started");

    // Initiate GET to hosted json URL
    fetch(url)
        // Handle the response from fetch request
        .then((response) => {
            // Display response status to console
            console.log(response.status);
            alert("Fetch returned status code = " + response.status);
            // Return parsed JSON data
            return response.json();
        })
        //  Process the returned JSON data and display to DOM
        .then(data => {
            console.log(data);
            // Processing JSON data - convert JSON to string
            // let dataString = JSON.stringify(data);

            // Send (all) converted JSON text to DOM element to display
            // display.innerText = dataString;

            // Loop through the array of objects
            data.forEach(entry => {

                // Access DOM element to display text
                let display = document.getElementById('display-education');

                // Access and assign values within each object entry
                let school = entry.school;
                let programMajor = entry['program/major'];
                let type = entry.type;
                let yearConferred = entry['year conferred'];

                // Display properties to the DOM using innerHTML and template literals to assign values
                display.innerHTML += `<p>School: ${school}</p>`;
                display.innerHTML += `<p>Program/Major: ${programMajor}</p>`;
                display.innerHTML += `<p>Type: ${type}</p>`;
                display.innerHTML += `<p>Year Conferred: ${yearConferred}</p>`;
                // Add horizontal rule for clarity
                display.innerHTML += '<hr>';
            });

        })
        // Catch any errors from fetch
        .catch((err) => {
            console.log("Error with fetch: " + err);
        });

    // Create a fetch request to return a promise

    // Resolve the promise using the Response class

    // Check the status code of the response

    // Process the returned JSON data using JS (DOM)

}