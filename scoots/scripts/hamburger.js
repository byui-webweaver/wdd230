document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle active class
    const navMenu = document.querySelector('.nav-container');
    const closeButton = document.getElementById('close-menu');

    // Display nav menu and toggle buttons based on active status
    if (this.classList.contains('active')) {
        navMenu.style.display = 'block'; // Show navigation on smaller screens
        closeButton.style.display = 'block'; // Show close button
        this.style.display = 'none'; // Hide hamburger button
    } else {
        navMenu.style.display = 'none'; // Hide navigation on smaller screens
        closeButton.style.display = 'none'; // Hide close button
        this.style.display = 'block'; // Show hamburger button (if needed)
    }
});

// Close menu when clicking on the close button
document.getElementById('close-menu').addEventListener('click', function() {
    const hamburger = document.getElementById('hamburger');
    hamburger.classList.remove('active'); // Remove active class from hamburger
    const navMenu = document.querySelector('.nav-container');
    navMenu.style.display = 'none'; // Hide navigation menu
    this.style.display = 'none'; // Hide close button
    hamburger.style.display = 'block'; // Show hamburger button again
});