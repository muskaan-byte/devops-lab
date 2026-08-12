const form = document.getElementById("registrationFormData");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();

    if (firstName === "" || lastName === "" || email === "") {
        alert("Please fill in all required fields.");
        return;
    }

    alert("Thank you for registering!");

    form.reset();
});

function showTime() {
    document.getElementById("currentTime").textContent =
        new Date().toUTCString();
}

showTime();
setInterval(showTime, 1000);
Your biggest syntax error

You wrote:

<body> {

This is wrong. It should be:

body {

And because your HTML already contains:

<link rel="stylesheet" href="style.css">

the CSS should be in a separate style.css file, not directly after </html>.

Likewise, your JavaScript should be inside script.js, which is loaded by:

<script src="script.js"></script>

With the three files above placed in the same folder, the registration form should work correctly.
