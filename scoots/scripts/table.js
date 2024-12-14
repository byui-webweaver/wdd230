

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
