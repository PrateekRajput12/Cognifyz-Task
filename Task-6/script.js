document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    // Clear previous error messages
    clearErrors();

    // Validate Name
    const name = document.getElementById('name').value;
    if (name === '') {
        isValid = false;
        showError('nameError', 'Name is required');
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        isValid = false;
        showError('emailError', 'Email is required');
    } else if (!emailPattern.test(email)) {
        isValid = false;
        showError('emailError', 'Invalid email format');
    }

    // Validate Phone
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\d{10}$/;
    if (phone === '') {
        isValid = false;
        showError('phoneError', 'Phone number is required');
    } else if (!phonePattern.test(phone)) {
        isValid = false;
        showError('phoneError', 'Invalid phone number format');
    }

    // Validate Message
    const message = document.getElementById('message').value;
    if (message === '') {
        isValid = false;
        showError('messageError', 'Message is required');
    }

    // If form is valid, submit it
    if (isValid) {
        document.getElementById('myForm').submit();
    }
}

function showError(elementId, errorMessage) {
    document.getElementById(elementId).textContent = errorMessage;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}

