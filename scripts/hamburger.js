const hamButton = document.querySelector('#hamburger');
const navigationMenu = document.querySelector('.navigation ul'); //Select the 'ul' directly

hamButton.addEventListener('click', () => {
    navigationMenu.classList.toggle('active'); 
    hamButton.textContent = navigationMenu.classList.contains('active') ? 'X' : '☰'; // Change icon between 'X' and '☰'

});