
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
            // Handle valid response
            if (response.ok) {
                console.log(response.status);
                // Display response status to alert
                alert("Fetch returned status code = " + response.status);
                // Return parsed JSON data from response
                return response.json();
            } else {
                // Throw error to catch if issue with response
                throw new Error("Error with fetch");
            }
        })
        //  Process the returned JSON data and display to DOM
        .then(data => {
            console.log(data);

            // Access the table body HTML
            let tableBody = document.getElementById('education-table-body');

            // Clear if rows already populated to avoid duplicate prints
            tableBody.innerHTML = '';

            // Loop through the array of objects
            data.forEach(entry => {
                let school = entry.school;
                let programMajor = entry.program_major;
                let type = entry.type;
                let yearConferred = entry.year_conferred;

                // Create a new row
                let tableRow = document.createElement('tr');

                // Populate the row with data
                tableRow.innerHTML = `
                <td>${school}</td>
                <td>${programMajor}</td>
                <td>${type}</td>
                <td>${yearConferred}</td>`;

                // Append education data to the table body
                tableBody.appendChild(tableRow);
            });
            
        })
        .catch(err => {
            console.log("Error with fetch: " + err);
            // Alert to browser with error if enountered during fetch
            alert(`Error with fetch ${err}`);
        });

}