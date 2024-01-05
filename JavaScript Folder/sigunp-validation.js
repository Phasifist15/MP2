// Use DOMContentLoaded to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  // Select the form and prevent its default behavior
  var form = document.getElementById('sign-up-form');
  form.addEventListener('submit', function (event) {
    // Prevent the form from submitting if it's invalid
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    // Add the 'was-validated' class to display validation errors
    form.classList.add('was-validated');
  }, false);
});