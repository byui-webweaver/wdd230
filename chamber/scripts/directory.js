const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards-dir");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
display.classList.add("grid");

function toggleView(view) {
    display.classList.remove("grid", "list");
    display.classList.add(view);
}
gridbutton.addEventListener("click", () => toggleView("grid"));
listbutton.addEventListener("click", () => toggleView("list"));	

const dirURL = 'https://byui-webweaver.github.io/wdd230/chamber/data/members.json';

async function getBusinessCard () {
    const response = await fetch(dirURL);
    const { companies } = await response.json();

    displayCards(companies);

}

const displayCards = (cards) => {
    display.innerHTML = '';
    cards.forEach((card) => {
        let busCard = document.createElement('section');
        busCard.classList.add('business-card');

        let icon = document.createElement('img');
        icon.src = card.image;
        icon.alt = `${card.name} logo`;
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', 150);
    

        let name = document.createElement('h2');
        name.textContent = card.name;

        let address = document.createElement('p');
        address.textContent = card.address;

        let phone = document.createElement('p');
        phone.textContent = card.phone;

        let url = document.createElement('p');
        url.innerHTML = `<a href="${card.url}" target="_blank">Website</a>`;
        

        busCard.appendChild(icon);
        busCard.appendChild(name);
        busCard.appendChild(address);
        busCard.appendChild(phone);
        busCard.appendChild(url);

        display.appendChild(busCard);


        
    
    });
}

getBusinessCard();