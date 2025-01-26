/*
  Auto Guardian: Roadside Assistance Website
  script.js (Apple-like Minimalist Style)
  Description: Adds interactivity (smooth scrolling, fade-in animations, form validation).
*/

// SMOOTH SCROLLING FOR NAV LINKS
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
  
  // AUTOMATICALLY UPDATE COPYRIGHT YEAR
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // CONTACT FORM VALIDATION AND SUBMISSION
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validate fields
    if (name === '' || email === '' || message === '') {
      formSuccess.style.color = 'red';
      formSuccess.textContent = 'Please fill in all fields.';
      return;
    }
  
    formSuccess.style.color = 'green';
    formSuccess.textContent = 'Thank you for contacting us! We will get back to you shortly.';
    contactForm.reset();
  });
  
  /* FADE-IN SECTIONS ON SCROLL (Intersection Observer) */
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  
  const options = {
    threshold: 0.1,
  };
  
  function handleFadeIn(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }
  
  const observer = new IntersectionObserver(handleFadeIn, options);
  
  fadeInSections.forEach((section) => {
    observer.observe(section);
  });
  