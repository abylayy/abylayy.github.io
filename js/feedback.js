function subscribeNewsletter() {

    const emailInput = document.getElementById('email');
    const userEmail = emailInput.value;


    if (validateEmail(userEmail)) {

        showNotification('Subscription Successful!', 'Thank you for subscribing to our newsletter.');

        emailInput.value = '';
    } else {

        showNotification('Invalid Email!', 'Please enter a valid email address.');
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(title, message) {
    alert(`${title}\n${message}`);
}
