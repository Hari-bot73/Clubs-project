document.querySelectorAll('.social-links a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Add social link click handling here
    });
  });
  
  // Add event listener to footer links
  document.querySelectorAll('.footer a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Add footer link click handling here
    });
  });