/*login*/
// Function for login validation
function login() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    if (username === "" || password === "") {
        alert("Please enter username and password.");
    } else {
        alert("Login successful!");
    }
}



/*register*/
// Function for registration validation
function register() {
    let username = document.getElementById('register-username').value;
    let email = document.getElementById('register-email').value;
    let password = document.getElementById('register-password').value;

    if (username === "" || email === "" || password === "") {
        alert("All fields are required.");
    } else {
        alert("Registration successful!");
        window.location.href = "login.html";
    }
}