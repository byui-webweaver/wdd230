const visitsDisplay = document.querySelector(".visits");
const visitMessage = document.createElement("p"); // Create a paragraph for the visit message
document.getElementById("container-visits").appendChild(visitMessage);

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let lastVisitDate = window.localStorage.getItem("lastVisit-ls");

// Determine if this is a first visit
if (numVisits === 0) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
   // visitsDisplay.textContent = numVisits; 

    if (lastVisitDate) {
        const currentDate = Date.now();
        const timeDifference = currentDate - lastVisitDate; // Time difference in ms
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
        }
    }
}

// Store the current visit date and increment number of visits
numVisits++; // Increase visits by one
localStorage.setItem("numVisits-ls", numVisits); // Store incremented visits in local storage
localStorage.setItem("lastVisit-ls", Date.now()); // Store the current date in localStorage
