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

// Open/Closed Status
 const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentDay = now.getDay();

  const currentTotalMinutes = currentHour * 60 + currentMinute;

  const schedule = {
    0: { open: 420, close: 870 },
    1: { open: 420, close: 870 },
    2: { open: 420, close: 870 },
    3: { open: 420, close: 870 },
    4: { open: 420, close: 870 },
    5: { open: 420, close: 870 },
    6: { open: 420, close: 840 },
  };

  const line1 = document.querySelector('#hours-status .line-1');
  const line2 = document.querySelector('#hours-status .line-2');
  const todaySchedule = schedule[currentDay];

  function formatTime(minutes) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    const displayMinute = minute.toString().padStart(2, '0');
    return `${displayHour}:${displayMinute} ${period}`;
  }

  if (
    currentTotalMinutes >= todaySchedule.open &&
    currentTotalMinutes < todaySchedule.close
  ) {
    line1.textContent = "We’re Open Now!";
    line1.style.color = "#00ff90";
    line2.textContent = "";
  } else {
    const tomorrowDay = (currentDay + 1) % 7;
    const tomorrowSchedule = schedule[tomorrowDay];
    const openTime = formatTime(tomorrowSchedule.open);
    const closeTime = formatTime(tomorrowSchedule.close);

    line1.textContent = "We’re Closed";
    line1.style.color = "#ff6464";
    line2.textContent = `Open tomorrow from ${openTime} to ${closeTime}.`;
    line2.style.color = "#ffffff";
  }

updateHoursStatus();
