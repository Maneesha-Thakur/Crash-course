document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const password = document.getElementById('password').value;

    const user = {
        name: name,
        role: role,
        password: password
    };

   
    localStorage.setItem('user', JSON.stringify(user));

    
    window.location.href = 'login.html';
});
