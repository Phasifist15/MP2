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