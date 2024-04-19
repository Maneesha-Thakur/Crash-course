
const countryContainer = document.getElementById('country-container');

function fetchCountries() {
    fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
        .then(response => response.json())
        .then(data => displayCountries(data))
        .catch(error => console.error('Error fetching countries:', error));
}
 

function displayCountries(users) {
        countryContainer.innerHTML = '';
    users.forEach(data => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');
        countryCard.innerHTML = `
            <h2>${data.country}</h2>
            <p>Population: ${data.population}</p>
            <p>Rank: ${data.Rank}</p>
        
        `;
        countryContainer.appendChild(countryCard);
    });
}

function sortCountries() {
    fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc')
        .then(response => response.json())
        .then(data => displayCountries(data.data))
        .catch(error => console.error('Error sorting countries:', error));
}

fetchCountries();
