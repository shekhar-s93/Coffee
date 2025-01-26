// External JavaScript for authentication

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    
    // Predefined valid user credentials
    const validUser = {
        email: 'shekharsuman3266@gmail.com',
        password: 'shekharsuman3266'
    };

    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check if credentials match
        if (email === validUser.email && password === validUser.password) {
            // If valid, redirect to the main page
            window.location.href = '/Coffee/coffee.html'; // Replace with your redirect URL
        } else {
            // If invalid, show error message
            errorMessage.textContent = 'Invalid email or password. Please try again.';
        }
    });
});
