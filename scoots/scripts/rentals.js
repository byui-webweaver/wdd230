const url = 'https://byui-webweaver.github.io/wdd230/scoots/data/rentals.json';
const cards = document.querySelector('#cards-rentals');

async function getRentalData () {
    const response = await fetch(url);
    const data = await response.json();

    displayRentals(data.rentals);
    
}


const displayRentals = (rentals) => {
    rentals.forEach ((rental) => {
        //Create elements to add to div.
        //Create card for each rental vehicle
        let rentalCard = document.createElement('div');
        rentalCard.classList.add('rental-card-page-2');
        

       //Set the inner HTML with detail options
       rentalCard.innerHTML = `
       <h2>${rental.type}</h2>
       <img src="${rental.image_url}" alt="${rental.image_alt}" loading="lazy" width="500" height="auto" />
        <ul>
            <li>${rental.make}: ${rental.model}</li>
            <li> Max-Persons: ${rental.max_persons}</li>
        </ul>
    `;

    //Append the card to the cards container
    cards.appendChild(rentalCard);

    });
}

getRentalData();