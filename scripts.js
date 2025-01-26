/*
  Auto Guardian: Roadside Assistance Website
  scripts.js (Ensuring content is visible by default)
*/

// 1. SMOOTH SCROLLING FOR NAV LINKS
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
  
  // 2. AUTOMATIC COPYRIGHT YEAR
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // 3. CONTACT FORM VALIDATION
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      formSuccess.style.color = 'red';
      formSuccess.textContent = 'Please fill in all fields.';
      return;
    }
  
    formSuccess.style.color = 'green';
    formSuccess.textContent = 'Thank you for contacting us! We will get back to you shortly.';
    contactForm.reset();
  });
  
  // 4. FADE-IN ON SCROLL (ONLY IF INTERSECTIONOBSERVER IS SUPPORTED)
  if ('IntersectionObserver' in window) {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
  
    // Apply .fade-out so they're initially hidden, then remove .fade-out on intersection
    fadeInSections.forEach(section => {
      section.classList.add('fade-out');
    });
  
    const observerOptions = {
      threshold: 0.1,
    };
  
    function fadeInOnScroll(entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('fade-out'); // reveal the section
        observer.unobserve(entry.target);
      });
    }
  
    const sectionObserver = new IntersectionObserver(fadeInOnScroll, observerOptions);
  
    fadeInSections.forEach(section => sectionObserver.observe(section));
  }
  