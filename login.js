document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const loginToggle = document.getElementById("login-toggle");
    const registerToggle = document.getElementById("register-toggle");

    loginToggle.addEventListener("click", function () {
        loginForm.classList.add("active-form");
        registerForm.classList.remove("active-form");
        loginToggle.classList.add("active-toggle");
        registerToggle.classList.remove("active-toggle");
    });

    registerToggle.addEventListener("click", function () {
        registerForm.classList.add("active-form");
        loginForm.classList.remove("active-form");
        registerToggle.classList.add("active-toggle");
        loginToggle.classList.remove("active-toggle");
    });
});