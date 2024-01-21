document.addEventListener('DOMContentLoaded', function () {
  const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
  const loginModal = new bootstrap.Modal(document.getElementById('login'));

  const form = document.getElementById('sign-up-form');
  const confirmPasswordInput = document.getElementById('password2');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
    } else {
      const password = document.getElementById('password1').value;
      const confirmPass = confirmPasswordInput.value;

      if (password !== confirmPass) {
        confirmPasswordInput.setCustomValidity("Passwords don't match");
        confirmPasswordInput.reportValidity();
      } else {
        confirmPasswordInput.setCustomValidity('');
        confirmPasswordInput.reportValidity();

        const fullName = document.getElementById("fname").value;
        const email = document.getElementById("email").value;
        const contact = document.getElementById("contacts").value;
        const address = document.getElementById("address").value;
        const username = document.getElementById("user").value;
        const password = document.getElementById("password1").value;
  
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ fullName, email, contact, address, username, password });
        localStorage.setItem('users', JSON.stringify(users));

        form.reset();
        signupModal.hide();
        loginModal.show();
      }
    }
  });

  // Validate the Password and Confirm Password

  confirmPasswordInput.addEventListener('input', function () {
    const password = document.getElementById('password1').value;
    const confirmPass = confirmPasswordInput.value;
  
    if (password !== confirmPass) {
      confirmPasswordInput.classList.add('is-invalid');
      confirmPasswordInput.classList.remove('is-valid');
      confirmPasswordInput.nextElementSibling.textContent = "Passwords don't match";
    } else {
      confirmPasswordInput.classList.remove('is-invalid');
      confirmPasswordInput.classList.add('is-valid');
      confirmPasswordInput.nextElementSibling.textContent = "";
    }
  });
});
