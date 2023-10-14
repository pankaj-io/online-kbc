const registrationForm = document.getElementById('registration-form');
const message = document.getElementById('message');

// Create an empty array to store registered users
const users = [];

// Event listener for registration form submission
registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    // Check if the username is already registered
    const isRegistered = users.some((user) => user.username === username);

    if (isRegistered) {
        message.innerText = 'Username already exists. Please choose another one.';
    } else {
        // Register the user
        users.push({ username, password });
        message.innerText = 'Registration successful. You will now be redirected to the login page.';
        // Clear the registration form
        registrationForm.reset();

        // Redirect to the login page after a short delay
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
});
