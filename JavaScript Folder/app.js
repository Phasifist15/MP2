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

      // Sign Up inside Log In modal

      const signupBtn = document.getElementById('signupBtn');
      const signupAnchored = document.getElementById('signupAnchored');

      signupAnchored.addEventListener('click', function(event){

        event.preventDefault();


        const loginModalCloseButton = new bootstrap.Modal(document.querySelector('#login .btn-close'));
        loginModalCloseButton.hide();

        signupBtn.click();
      });

      // Log In inside Sign Up modal

      const loginAnchored = document.getElementById('loginAnchored');
      const loginBtn = document.getElementById('loginBtn');

      loginAnchored.addEventListener('click', function(event){

        event.preventDefault();

        const signupModalCloseButton = new bootstrap.Modal(document.querySelector('#signupModal .btn-close'));
        signupModalCloseButton.hide();

        loginBtn.click();
      });

// Learn More
      const learnmore = document.getElementById('learnmore');

      learnmore.addEventListener('click', function(){
        window.location.href = 'about.html';
      });


//Animation on Scroll
    const services = document.querySelectorAll('.serv');

    document.addEventListener('scroll', () => {
      services.forEach(service => {
        const rect = service.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          service.style.animation = "zoomIn 2s";
          service.style.animationDelay = "0.1s";
        } else {
          service.style.animation = "none";
        }
      });
    });

// MAIN SECTION ANIMATION

document.addEventListener('DOMContentLoaded', () => {
  const mainHeader = document.querySelector('.mainHeader');

  mainHeader.style.animation = "fadeIn 2s";
});

// FOOTER LEARN MORE
function learn(){
  window.location.href = 'about.html';
}