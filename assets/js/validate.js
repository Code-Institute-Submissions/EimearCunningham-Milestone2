const form = document.getElementById("form");
const cusname = document.getElementById("name");
const emailaddress = document.getElementById("emailAddress");
const contactnumber = document.getElementById("contactNumber");
const cafe = document.getElementById('location');
const date = document.getElementById("date");
const time = document.getElementById("time");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // call checkInputs function
  checkInputs();
});

// check to see if input is empty/valid
function checkInputs() {
  // get the values from the inputs
  const nameValue = cusname.value;
  const emailValue = emailaddress.value;
  const numberValue = contactnumber.value;
  const cafeValue = cafe.value;
  const dateValue = date.value;
  const timeValue = time.value;

  // check name input
  if (nameValue === "") {
    setErrorFor(cusname, "We require a name for your table reservation");
  } else {
    setSuccessFor(cusname);
    
  }

  // check email input
  if (emailValue === "") {
    setErrorFor(
      emailaddress,
      "We'll need your email address to confirm your booking"
    );
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailaddress, "Please enter a valid email address");
  } else {
    setSuccessFor(emailaddress);
  }

  // check number input
  if (numberValue === "") {
    setErrorFor(
      contactnumber,
      "We'll need a contact number to contact you about your booking"
    );
  } else if (!isNumber(numberValue)) {
    setErrorFor(contactnumber, "Number must be 10 digits");
  } else {
    setSuccessFor(contactnumber);
  }

  // check cafe input
  if (cafeValue === "") {
    setErrorFor(
      cafe,
      "Please outline your preferred location"
    );
  } else {
    setSuccessFor(cafe);
  }

  // check date input
  if (dateValue === "") {
    setErrorFor(
      date,
      "Please select the date you would like to book your table"
    );
  } else {
    setSuccessFor(date);
  }

  // check time input
  if (timeValue === "") {
    setErrorFor(
      time,
      "Please select the time you would like to book your table"
    );
  } else {
    setSuccessFor(time);
  }
}

// function that adds error class and message
function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");

  //add error message inside small tag
  small.innerText = message;

  //add error class
  formGroup.className = "form-group error";
}

// function that adds success class
function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

// check if email address is valid format
function isEmail(email) {
  // regex from stackoverflow.com
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// check if contact number is valid (10 digits)
function isNumber(number) {
  // regex from w3resource.com
  return /^\d{10}$/.test(number);
}

//function to show modal on valid input
$('#form').on('submit', function (e) {
    var showModal = true;
    $(".form-control").each(function (element) {
        if ($(this).val() == "") {
            showModal = false;
        }
    });
    if (showModal) {
        $('#submitModal').modal('show');
    }
});











// function to send email on submission of form
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