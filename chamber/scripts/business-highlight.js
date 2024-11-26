
const dirURL = 'https://byui-webweaver.github.io/wdd230/chamber/data/members.json'


async function fetchMembers() {
    const response = await fetch(dirURL);
    const data = await response.json();
    return data.companies;
    
}

function filterMembers(members) {
    return members.filter(member => member.level === 'Gold' || member.level === 'Silver');

}

function getRandomMembers(members, count) {
    const random = members.sort(() => 0.5 - Math.random());
    return random.slice(0, count);
}

function displaySpotlightMembers(members) {
    const spotlightSection = document.querySelector('.business-highlights');
    spotlightSection.innerHTML = '';

    members.forEach(member => {
        const memberHTML = `
            <div class='business-card-highlight'>
                <img class="highlight-img" src="${member.image}" alt="${member.name} logo">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.url}" target="_blank">Visit Website</a>
            </div>`

        spotlightSection.innerHTML += memberHTML;
    });
}

async function init() {
    const members = await fetchMembers();
    const filteredMembers = filterMembers(members);
    const randomMembers = getRandomMembers(filteredMembers,2);
    displaySpotlightMembers(randomMembers);
}

window.onload = init;
