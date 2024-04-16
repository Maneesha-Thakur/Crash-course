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

        nameCell.textContent = employee.name;
    });
}

// Function to add a new employee
function addEmployee(name) {
    // Retrieve employee records from local storage
    var employeeRecords = JSON.parse(localStorage.getItem('employeeRecords')) || [];

    // Example: Generate a unique ID (you may need a more robust method)
    var newEmployeeId = employeeRecords.length + 1;

    // Create a new employee object
    var newEmployee = { id: newEmployeeId, name: name };

    // Add the new employee to the array
    employeeRecords.push(newEmployee);

    // Save updated employee records back to local storage
    localStorage.setItem('employeeRecords', JSON.stringify(employeeRecords));

    // Repopulate the employee table
    populateEmployeeTable();

    // Trigger refresh of HR Page
    refreshHRPage();
}

// Function to delete an employee
function deleteEmployee(employeeId) {
    // Retrieve employee records from local storage
    var employeeRecords = JSON.parse(localStorage.getItem('employeeRecords')) || [];
    
    // Find index of employee with given ID
    var index = employeeRecords.findIndex(function(employee) {
        return employee.id === employeeId;
    });

    if (index !== -1) {
        // Remove employee record from array
        employeeRecords.splice(index, 1);
        
        // Save updated employee records back to local storage
        localStorage.setItem('employeeRecords', JSON.stringify(employeeRecords));
        
        // Repopulate the employee table
        populateEmployeeTable();

        // Trigger refresh of HR Page
        refreshHRPage();
    } else {
        console.error('Employee not found');
    }
}

// Function to trigger refresh of HR Page
function refreshHRPage() {
    // Dispatch a custom event to notify HR Page to refresh
    var event = new Event('refreshHRPage');
    document.dispatchEvent(event);
}

// Call the function to populate employee table when the page loads
window.onload = function() {
    populateEmployeeTable();
};