
function OpenSignupForm() {
  window.open('signIn.html' );

}
function OpenLoginForm() {
  window.open('Login.html' );
}
function email() {
  window.open('https://mail.google.com/', '_blank');

}
function twitter() {
  window.open('https://twitter.com/?lang=en-in', '_blank');

}
function facebook() {
  window.open('https://www.facebook.com/', '_blank');

}
function instagram() {
  window.open('https://www.instagram.com/', '_blank');

}
function linkedin() {
  window.open('https://www.linkedin.com/', '_blank');

}
function google() {
  window.open('https://www.google.co.in/', '_blank');

}
function book(){
  window.open('book.html' );  
}
function subscribe() {
  var email = document.querySelector('.emailforsubscribe').value;
  if (email) {
    alert('Thank you for subscribing our newsletters!\n Your email is ' + email);
  }
}
