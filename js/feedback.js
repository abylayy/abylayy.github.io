// To handle newsletter subscription
function subscribeNewsletter() {
    // Get the email input and message textarea elements
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');

    // Get user input values
    const userEmail = emailInput.value;
    const userMessage = messageTextarea.value;

    // Validate the email and message
    if (validateEmail(userEmail) && validateMessage(userMessage)) {
        // If both email and message are valid
        showNotification('Subscription Successful!', 'Thank you for subscribing to our newsletter.');

        // Clear inputs
        emailInput.value = '';
        messageTextarea.value = '';
    } else {
        // If either email or message is invalid
        showNotification('Invalid Input!', 'Please enter a valid email address and message.');
    }
}

// Validate email by using regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate message (you can customize this validation based on your requirements)
function validateMessage(message) {
    // For demonstration purposes, let's consider the message valid if it's not empty
    return message.trim() !== '';
}

function showNotification(title, message) {
    // alert
    alert(`${title}\n${message}`);
}
