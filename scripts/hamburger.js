const hamButton = document.querySelector('#hamburger');
const navigationMenu = document.querySelector('.navigation ul'); //Select the 'ul' directly

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open'); //shows the menu list
    hamButton.classList.toggle('open');
});