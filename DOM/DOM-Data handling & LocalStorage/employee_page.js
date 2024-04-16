// // Logic for Employee Page
// // Populate employee records table
// function populateEmployeeTable() {
//     // Add logic to fetch and populate employee records
// }

// // Call the function to populate employee table when the page loads
// window.onload = populateEmployeeTable;


// Function to populate the employee records table
function populateEmployeeTable() {
    // Assuming you have a table element with id 'employee-table'
    var table = document.getElementById('employee-table');
    
    // Clear existing table data
    table.innerHTML = '';

    // Retrieve employee records from local storage
    var employeeRecords = JSON.parse(localStorage.getItem('employeeRecords')) || [];

    // Populate the table with employee records
    employeeRecords.forEach(function(employee) {
        var row = table.insertRow();
        var nameCell = row.insertCell(0);
        var viewCell = row.insertCell(1);

        nameCell.textContent = employee.name;

        // Add a button to view employee details
        var viewButton = document.createElement('button');
        viewButton.textContent = 'View Details';
        viewButton.addEventListener('click', function() {
            // Call function to view employee details
            viewEmployeeDetails(employee.id);
        });
        viewCell.appendChild(viewButton);
    });
}

// Function to view employee details
function viewEmployeeDetails(employeeId) {
    // Retrieve employee details from local storage
    var employeeDetails = JSON.parse(localStorage.getItem('employeeDetails'));
    if (employeeDetails && employeeDetails[employeeId]) {
        // Display employee details
        var employee = employeeDetails[employeeId];
        document.getElementById('employee-details-modal').innerHTML = `
            <h2>${employee.name}</h2>
            <p>ID: ${employee.id}</p>
            <!-- Add other details as needed -->
        `;
        // Display the modal
        // Example using Bootstrap modal
        $('#employee-details-modal').modal('show');
    } else {
        console.error('Employee details not found');
    }
}

// Call the function to populate employee table when the page loads
window.onload = populateEmployeeTable;

// Example code to save employee records to local storage
var employeeRecords = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
];
localStorage.setItem('employeeRecords', JSON.stringify(employeeRecords));

// Example code to save employee details to local storage
var employeeDetails = {
    1: { id: 1, name: 'John Doe', /* other details */ },
    2: { id: 2, name: 'Jane Smith', /* other details */ }
};
localStorage.setItem('employeeDetails', JSON.stringify(employeeDetails));
