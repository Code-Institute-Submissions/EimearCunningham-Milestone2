const form = document.getElementById('form');
const name = document.getElementById('name');
const emailaddress = document.getElementById('emailAddress');
const contactnumber = document.getElementById('contactNumber');
// const location = document.getElementById('location');
const date = document.getElementById('date');
const time = document.getElementById('time');

form.addEventListener('submit', (e) => {

     e.preventDefault();

    // call checkInputs function
    checkInputs();
});

// check to see if input is empty/valid
function checkInputs() {
    // get the values from the inputs 
    const nameValue = name.value;
    const emailValue = emailaddress.value;
    const numberValue = contactnumber.value;
    // const locationValue = location.value;
    const dateValue = date.value;
    const timeValue = time.value;

    // check name input
    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be blank');
    } else {
        setSuccessFor(name);
    }

    // check email input
    if (emailValue === '') {
        setErrorFor(emailAddress, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(emailAddress, 'Email is not valid');
    } else {
        setSuccessFor(emailAddress);
    }

    // check number input
    if (numberValue === '') {
        setErrorFor(contactNumber, 'Number cannot be blank');
    } else if(!isNumber(numberValue)) {
        setErrorFor(contactNumber, 'Number must be 10 digits');
    } else {
        setSuccessFor(contactNumber);
    }


    // check date input
    if (dateValue === '') {
        setErrorFor(date, 'Date cannot be blank');

    } else {
        setSuccessFor(date);
    }


    // check time input 
    if (timeValue === '') {
        setErrorFor(time, 'Time cannot be blank');

    } else {
        setSuccessFor(time);
    }
    
}

// function that adds error class and message
function setErrorFor (input, message) {
    const formGroup = input.parentElement; 
    const small = formGroup.querySelector('small');

    //add error message inside small tag
    small.innerText = message;

    //add error class
    formGroup.className = 'form-group error'; 

}

// function that adds success class
function setSuccessFor(input) {
    const formGroup = input.parentElement; 
    formGroup.className = 'form-group success'; 
}

// check if email address is valid format
function isEmail(email) {
    // regex from stackoverflow.com
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// check if contact number is valid (10 digits)
function isNumber(number) {
    // regex from w3resource.com
    return /^\d{10}$/.test(number);
}


