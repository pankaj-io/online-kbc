const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

// Array to store registered users (should be populated from a server/database)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more users as needed
];

// Event listener for login form submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = e.target['login-username'].value;
    const password = e.target['login-password'].value;

    // Check if the username and password match any registered user
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        message.innerText = 'Login successful. Welcome, ' + username + '!';
        // Redirect to the new page (e.g., dashboard.html) after a short delay
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        message.innerText = 'Invalid username or password. Please try again.';
    }
    // Clear the login form
    loginForm.reset();
});
