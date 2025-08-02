// Hamburger nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  // Accessibility: toggle aria-expanded
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
});

// Collapsible menu sections
const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const content = button.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove('expanded');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('expanded');
    }
  });
});

// Back to top button
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Example hours open/close check (simplified)
function updateHoursStatus() {
  const hoursStatus = document.getElementById('hours-status');
  const now = new Date();
  const day = now.getDay(); // Sunday=0, Saturday=6
  const hour = now.getHours();

  // Open 7AM-8PM every day for example
  if (hour >= 7 && hour < 20) {
    hoursStatus.textContent = "We're Open!";
    hoursStatus.style.color = '#00ff00';
  } else {
    hoursStatus.textContent = "Sorry, We're Closed.";
    hoursStatus.style.color = '#ff0000';
  }
}

updateHoursStatus();
