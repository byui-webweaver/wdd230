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
       <img src="${rental.image_url}" alt="${rental.image_alt}" width="${rental.image_width}" height="${rental.image_height}"/>
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

//Table script



//Fetch the JSON data
fetch(url)
    .then(response => response.json())
    .then(data => {
        const rentals = data.rentals;//access array
        const rentalBody = document.getElementById('rental-body');

        //Iterate through array and creat table rows
        rentals.forEach(rental => {
            const row = document.createElement('tr');
            row.classList.add('rental-pricing');


            row. innerHTML = `
                <td>${rental.make} ${rental.model}</td>
                <td>${rental.half_day_res}</td>
                <td>${rental.full_day_res}</td>
                <td>${rental.half_day_walkin}</td>
                <td>${rental.full_day_walkin}</td>
            `;

            rentalBody.appendChild(row);

        });

    })

    .catch(error => console.error('Error fetching data:', error));