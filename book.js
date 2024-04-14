
function validateForm() {
    var fullname = document.forms["paymentForm"]["fullname"].value;
    var email = document.forms["paymentForm"]["email"].value;
    var phone = document.forms["paymentForm"]["phone"].value;
    var password = document.forms["paymentForm"]["password"].value;
    var confirm_password = document.forms["paymentForm"]["confirm_password"].value;
    var departure = document.forms["paymentForm"]["departure"].value;

    if (fullname == "" || email == "" || phone == "" || password == "" || confirm_password == "" || departure == "") {
        alert("Please fill all fields.");
        return false;
    }

    if (password !== confirm_password) {
        alert("Your passwords do not match.");
        return false;
    }
    return true;
}

function validateAndSubmit(action) {
    if (validateForm()) {
        if (action === 'payNow') {
            window.location.href = 'payment.html';
        }
    }
    return false;
}

