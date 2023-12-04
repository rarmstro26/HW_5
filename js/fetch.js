
// URL to hosted JSON file from part 1 with education data
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

    // Initiate GET via fetch to hosted JSON url
    fetch(url)
        // Handle the response from fetch request
        .then((response) => {
            console.log(response.status);
            // Display response status to alert
            alert(`Fetch returned status code = ${response.status}`);
            // Return parsed JSON data from response
            return response.json();
        })
        //  Process the returned JSON data and display to DOM
        .then(data => {
            console.log(data);

            // Loop through the array of objects
            data.forEach(entry => {

                // Access DOM element to display text
                let display = document.getElementById('display-education');

                // Access and assign values within each object entry
                let school = entry.school;
                // Updated JSON keys to account for special characters using dot notation
                let programMajor = entry.program_major;
                let type = entry.type;
                // Updated JSON keys to account for special characters using dot notation
                let yearConferred = entry.year_conferred;

                // Display properties to the DOM using innerHTML and template literals to assign values
                display.innerHTML += `<p>School: ${school}</p>`;
                display.innerHTML += `<p>Program/Major: ${programMajor}</p>`;
                display.innerHTML += `<p>Type: ${type}</p>`;
                display.innerHTML += `<p>Year Conferred: ${yearConferred}</p>`;
                // Add horizontal rule for clarity
                display.innerHTML += '<hr>';
            });
        })
        // Catch any errors encountered during fetch
        .catch((err) => {
            console.log("Error with fetch: " + err);
            alert(`Error with fetch ${err}`);
        });

}