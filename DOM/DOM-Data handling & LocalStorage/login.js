// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Retrieve user data from localStorage
//     const user = JSON.parse(localStorage.getItem('user'));

//     if (user && user.name === username && user.password === password) {
//         // Redirect based on role
//         if (user.role === 'HR') {
//             window.location.href = 'hr_page.html';
//         } else if (user.role === 'Employee') {
//             window.location.href = 'employee_page.html';
//         }
//     } else {
//         alert('Invalid username or password');
//     }
// });


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.name === username && user.password === password) {
        // Redirect based on role
        if (user.role === 'HR') {
            window.location.href = 'hr_page.html';
        } else if (user.role === 'Employee') {
            window.location.href = 'employee_page.html';
        }
    } else {
        alert('Invalid username or password');
    }
});
