document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("meet-greet-banner");
    const closeButton = document.getElementById("close-banner");
    const today = new Date();
    const day = today.getDay();

    //Monday(1), Tuesday(2), Wednesday(3)
    if (day === 1 || day === 2 || day ===3){
        banner.style.display = "block";//shows banner
    }

    //Use Close Button
    closeButton.addEventListener("click", function() {
        banner.style.display = "none"; //Hides banner
    });
});