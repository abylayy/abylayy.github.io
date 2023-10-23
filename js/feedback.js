// To handle newsletter subscription
function subscribeNewsletter() {

    // Get the email input element
    const emailInput = document.getElementById('email');
    const userEmail = emailInput.value;

    // Validate the email
    if (validateEmail(userEmail)) {

        //if valid
        showNotification('Subscription Successful!', 'Thank you for subscribing to our newsletter.');

        emailInput.value = ''; //clear input

        //if invalid
    } else {

        showNotification('Invalid Email!', 'Please enter a valid email address.');
    }
}

// Validate email by using regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(title, message) {
    // alert
    alert(`${title}\n${message}`);
}
