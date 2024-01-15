document.addEventListener('DOMContentLoaded', function () {
  var signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
  var loginModal = new bootstrap.Modal(document.getElementById('login'));

  var form = document.getElementById('sign-up-form');
  var confirmPasswordInput = document.getElementById('password2');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
    } else {
      var password = document.getElementById('password1').value;
      var confirmPass = confirmPasswordInput.value;

      if (password !== confirmPass) {
        confirmPasswordInput.setCustomValidity("Passwords don't match");
        confirmPasswordInput.reportValidity();
      } else {
        confirmPasswordInput.setCustomValidity('');
        confirmPasswordInput.reportValidity();

        var fullName = document.getElementById("fname").value;
        var email = document.getElementById("email").value;
        var contact = document.getElementById("contacts").value;
        var address = document.getElementById("address").value;
        var username = document.getElementById("user").value;
        var password = document.getElementById("password1").value;
  
        var users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ fullName: fullName, email: email, contact: contact, address: address, username: username, password: password });
        localStorage.setItem('users', JSON.stringify(users));

        form.reset();
        signupModal.hide();
        loginModal.show();
      }
    }
  });

  // Real-time validation of password and confirm password
  confirmPasswordInput.addEventListener('input', function () {
    var password = document.getElementById('password1').value;
    var confirmPass = confirmPasswordInput.value;

    if (password !== confirmPass) {
      confirmPasswordInput.setCustomValidity("Passwords don't match");
    } else {
      confirmPasswordInput.setCustomValidity('');
    }

    confirmPasswordInput.reportValidity();
  });

  signupModal.addEventListener('hidden.bs.modal', function () {
    form.classList.remove('was-validated');
    form.reset();
  });

  
});
