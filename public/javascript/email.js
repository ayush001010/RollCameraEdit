const btn = document.getElementById('button');

document.getElementById('contact-form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_xnh6ch6';
    const templateID = 'feedback_form';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Feedback';
        this.reset();
      }, (err) => {
        btn.value = 'Send Feedback';
        alert(JSON.stringify(err));
      });
  });
