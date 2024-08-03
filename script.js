document.addEventListener('DOMContentLoaded', function() {
  const openPopupButton = document.getElementById('open-resume-popup');
  const closePopupButton = document.getElementById('close-resume-popup');
  const popup = document.getElementById('resume-popup');

  openPopupButton.addEventListener('click', function() {
      popup.style.display = 'flex';
  });

  closePopupButton.addEventListener('click', function() {
      popup.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target === popup) {
          popup.style.display = 'none';
      }
  });
});
