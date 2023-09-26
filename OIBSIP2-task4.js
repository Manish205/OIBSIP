function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput === "mani21205.it@rmkec.ac.in" && passwordInput === "000000") {
        showSuccessMessage();
    } else {
        alert("Login failed. Please check your credentials.");
    }
}

function showSuccessMessage() {
    const loginForm = document.getElementById("login-form");
    const popupMessage = document.getElementById("popup-message");
    const containers = document.getElementById("container");

    containers.style.display = "none";
    loginForm.style.display = "none";
    popupMessage.style.display = "inline-block";
}

let passwordVisible = false;

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const visibilityToggle = document.querySelector(".visibility-toggle");

    passwordVisible = !passwordVisible;

    if (passwordVisible) {
        passwordInput.type = "text";
        visibilityToggle.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        visibilityToggle.textContent = "Show";
    }
}
