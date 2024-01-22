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
    const signupAnchored = document.getElementById('signupAnchored');

    signupAnchored.addEventListener('click', function(event){
      event.preventDefault();

      const loginModal = document.getElementById('login');
      const loginModalInstance = bootstrap.Modal.getInstance(loginModal);
      loginModalInstance.hide();

      const signupModal = document.getElementById('signupModal');
      const signupModalInstance = new bootstrap.Modal(signupModal);
      signupModalInstance.show();

      // Reset form validation state and clear error messages
      const form = document.getElementById('sign-up-form');
      form.classList.remove('was-validated');
      const passwordInput = document.getElementById('password1');
      const confirmPasswordInput = document.getElementById('password2');
      passwordInput.value = '';
      confirmPasswordInput.value = '';
      passwordInput.classList.remove('is-invalid', 'is-valid');
      confirmPasswordInput.classList.remove('is-invalid', 'is-valid');
      confirmPasswordInput.nextElementSibling.textContent = '';
    });

    // Log In inside Sign Up modal
    const loginAnchored = document.getElementById('loginAnchored');

    loginAnchored.addEventListener('click', function(event){
      event.preventDefault();

      const signupModal = document.getElementById('signupModal');
      const signupModalInstance = bootstrap.Modal.getInstance(signupModal);
      signupModalInstance.hide();

      const loginModal = document.getElementById('login');
      const loginModalInstance = new bootstrap.Modal(loginModal);
      loginModalInstance.show();

      // Reset form validation state and clear error messages
      const form = document.getElementById('login-form');
      form.classList.remove('was-validated');
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      usernameInput.value = '';
      passwordInput.value = '';
      usernameInput.classList.remove('is-invalid', 'is-valid');
      passwordInput.classList.remove('is-invalid', 'is-valid');
      passwordInput.nextElementSibling.textContent = '';
    });

// Animation on Scroll

const imgLeft = document.querySelectorAll('.imgLeft');
const imgRight = document.querySelectorAll('.imgRight');
const desLeft = document.querySelectorAll('.desLeft');
const desRight = document.querySelectorAll('.desRight');

const isElementInViewport = (e) => {
  const rect = e.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
};

const applyAnimationOnce = (elements, animationName) => {
  elements.forEach((e) => {
    if (isElementInViewport(e) && !e.dataset.animationApplied) {
      e.style.animation = `${animationName} 2s`;
      e.style.animationDelay = '0.1s';
      e.dataset.animationApplied = true;
    }
  });
};

document.addEventListener('scroll', () => {
  applyAnimationOnce(imgLeft, 'fadeInLeft');
  applyAnimationOnce(imgRight, 'fadeInRight');
  applyAnimationOnce(desLeft, 'fadeInLeft');
  applyAnimationOnce(desRight, 'fadeInRight');
});

// FOOTER LEARN MORE
function learn(){
  window.location.href = 'about.html';
}