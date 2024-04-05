 // Function to create investor elements
 function createInvestorElement(imgSrc, name, position, logoSrc) {
    const investorDiv = document.createElement('div');
    investorDiv.classList.add('child');

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = name;
    img.classList.add('img');
    investorDiv.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = name;
    investorDiv.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = position;
    investorDiv.appendChild(p);

    const logo = document.createElement('img');
    logo.src = logoSrc;
    logo.alt = name;
    logo.classList.add('logo');
    investorDiv.appendChild(logo);

    return investorDiv;
}

// Add board members
const parentDiv = document.getElementById('parent');


// Add strategic investors
const parentDiv1 = document.getElementById('parent1');
const strategicInvestorsData = [
    {
        imgSrc: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/Vijay_Shekhar_Sharma_Paytm_96f52579b8.jpg',
        name: 'Vijay Shekhar Sharma',
        position: 'Founder & CEO',
        logoSrc: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_rect_06df45a24f.svg'
    },
    {
        imgSrc: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/Rectangle_427_637d69bb57.png',
        name: 'Kunal Shah',
        position: 'Founder ',
        logoSrc: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/cred_0a47d7b4f8.png'
    },
    {
        imgSrc: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/amrish_rau_pine_labs_144e5e587c.jpg',
        name: 'Amrish Rau',
        position: 'CEO ',
        logoSrc: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/pine_labs_0aa2407434.png'
    },
    {
        imgSrc: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/Sampad_swain_Instamojo_f12bf6341e.jpg',
        name: 'Sampad Swain',
        position: 'Co-Founder & CEO ',
        logoSrc: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/instamojo_8763e704f7.png'
    },
   
    // Add more strategic investors here
];

strategicInvestorsData.forEach(investor => {
    const investorElement = createInvestorElement(investor.imgSrc, investor.name, investor.position, investor.logoSrc);
    parentDiv1.appendChild(investorElement);
});