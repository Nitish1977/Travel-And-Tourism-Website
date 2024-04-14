
function validateForm() {
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var password = document.querySelector('.pass').value;
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var isValid = true;

    if (name.trim() === '') {
        nameError.textContent = 'Please enter your name';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (email.trim() === '') {
        emailError.textContent = 'Please enter your email';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        isValid = false;
    } else if (!/[a-zA-Z]/.test(password)) {
        passwordError.textContent = 'Password must contain alphabets';
        isValid = false;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
        passwordError.textContent = 'Password must contain special characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        // Perform registration action here, for example, display a message
        alert('Account created successfully!');
    }
}
function openModal(){
    window.location.href = 'login.html';

}
