const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

//Determine if this is a first visit
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🙋 Welcome!`;
}

numVisits++; // Increase visits by one

localStorage.setItem("numVisits-ls", numVisits); // Store incremented visits in local storage