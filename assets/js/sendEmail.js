function sendMail(contactForm) {
  //Call Emailjs.send method
  emailjs
    .send("Gmail", "cafe", {
      //Link parameters from Emailjs template to contact form in index.html
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      from_number: contactForm.contactnumber.value,
      location: contactForm.location.value,
      date: contactForm.date.value,
      time: contactForm.time.value,
    })
    .then(
      //Message to console for email successfully sending
      function (response) {
        console.log("SUCCESS", response);
      },
      //Message to console for email sending failed
      function (error) {
        console.log("FAILED", error);
      }
    );
  //Stop new page from loading when 'Submit' is clicked
  return false;
}