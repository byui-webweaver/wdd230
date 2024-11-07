const password1 = document.querySelector("#pwd");
const password2 = document.querySelector("#pwd2");
const message = document.querySelector("#formessage");

// Optionally, set initial style in your CSS for #formessage
// #formessage { display: none; }

password2.addEventListener("focusout", checkSame);

function checkSame() {
    if (password1.value !== password2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visibility = "visible"; // Show the message
        message.style.display = "block"; // Make sure the message is displayed
        password2.style.backgroundColor = "#fff0f3";
        password2.value = "";
        password2.focus();
    } else {
        message.style.visibility = "hidden"; // Hide the message
        message.style.display = "none"; // Ensure the message is not displayed
        password2.style.backgroundColor = "#ced5d2";
        password2.style.color = "#000";
    }
}
