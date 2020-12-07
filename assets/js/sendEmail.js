function sendMail(contactForm) {
    emailjs.send ("Gmail", "cafe", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "from_number": contactForm.contactnumber.value,
        "location": contactForm.location.value,
        "date": contactForm.date.value,
        "time": contactForm.time.value
        
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}