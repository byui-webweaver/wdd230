const url = 'https://byui-webweaver.github.io/wdd230/scoots/data/rentals.json';
const cards = document.querySelector('#cards-rentals');

async function getRentalData () {
    const response = await fetch(url);
    const data = await response.json();
    
}

getRentalData();

const displayRentals = (rentals) => {
    
}