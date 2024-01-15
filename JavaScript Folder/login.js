document.addEventListener('DOMContentLoaded', function () {
  var loginForm = document.getElementById('login');
  var loginUsernameInput = loginForm.querySelector('#username'); 
  var loginPasswordInput = loginForm.querySelector('#password');
  var loginSubmitButton = loginForm.querySelector('#submit');

  loginSubmitButton.addEventListener('click', function (event) {
    event.preventDefault(); 
    var enteredUsername = loginUsernameInput.value;
    var enteredPassword = loginPasswordInput.value;

    var storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    var user = storedUsers.find(function (user) {
      return user.username === enteredUsername && user.password === enteredPassword;
    });

    if (user) {
      window.location.href = 'about.html';
    } else {
      alert('Invalid username or password');
    }
  });
});
