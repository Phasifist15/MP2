// LOGIN MODAL

  // Hide/Show Password

    // Login Modal

    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    togglePassword.addEventListener('click', function() {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    toggleIcon.className = type === 'password' ? 'bi bi-eye' : 'bi bi-eye-slash';
    });


  // Sign Up Modal
        // Password on signup

        const togglePassword1 = document.getElementById('togglePassword1');
        const password1 = document.getElementById('password1');
  
        togglePassword1.addEventListener('click', function() {
        const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
        password1.setAttribute('type', type);
        toggleIcons.className = type === 'password' ? 'bi bi-eye' : 'bi bi-eye-slash';
        });
  
      // Confirm Password on signup
  
      const togglePassword2 = document.getElementById('togglePassword2');
      const password2 = document.getElementById('password2');
  
      togglePassword2.addEventListener('click', function() {
      const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
      password2.setAttribute('type', type);
      toggleIconss.className = type === 'password' ? 'bi bi-eye' : 'bi bi-eye-slash';
      });


      // Sign Up inside Log In modal

      const signupBtn = document.getElementById('signupBtn');
      const signupAnchored = document.getElementById('signupAnchored');

      signupAnchored.addEventListener('click', function(event){

        // Preventing page from reloading
        event.preventDefault();


        // Automatically click the close button of login modal
        const loginModalCloseButton = new bootstrap.Modal(document.querySelector('#login .btn-close'));
        loginModalCloseButton.hide();

        // Click the Sign Up button on the navigation bar after automatically closing the modal for login
        signupBtn.click();
      });

      // Log In inside Sign Up modal

      const loginAnchored = document.getElementById('loginAnchored');
      const loginBtn = document.getElementById('loginBtn');

      loginAnchored.addEventListener('click', function(event){

        // Prevent page from reloading after executing the ff. functions
        event.preventDefault();

        // Automatically click the close button of signup modal
        const signupModalCloseButton = new bootstrap.Modal(document.querySelector('#signupModal .btn-close'));
        signupModalCloseButton.hide();

        // Click the Login button on the navigation bar after automatically closing the modal for signup
        loginBtn.click();
      });

// FOOTER