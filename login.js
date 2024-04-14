
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            var email = document.querySelector('.email').value;
            var password = document.querySelector('.pass').value;
            var emailError = document.getElementById('emailError');
            var passwordError = document.getElementById('passwordError');
            var isValid = true;

            if (email.trim() === '') {
                emailError.textContent = 'Please enter your email';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            if (password.trim() === '') {
                passwordError.textContent = 'Please enter your password';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if validation fails
            } else {
                // Assuming the user's name is "John Doe"
                alert('Welcome Back'); // Replace "John Doe" with the user's actual name
            }
        });
        function openModal(){
            window.location.href = 'signIn.html';

        }
    