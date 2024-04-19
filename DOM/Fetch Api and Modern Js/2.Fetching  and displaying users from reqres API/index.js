const fetchUsers = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        displayUsers(data.data);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

const displayUsers = (users) => {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = ''; 
    users.forEach(user => {
   
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <img src="${user.avatar}" alt="User Avatar">
            <h2>${user.first_name} ${user.last_name}</h2>
            <p>Email: ${user.email}</p>
        `;
        userContainer.append(userCard);
    });
};

document.getElementById('fetch-btn').addEventListener('click', fetchUsers);
