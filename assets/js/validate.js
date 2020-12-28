const form = document.getElementById('booking-form');

const name = document.getElementById('name');
const emailaddress = document.getElementById('emailaddress');
const contactnumber = document.getElementById('contactnumber');
const location = document.getElementById('location');
const date = document.getElementById('date');
const time = document.getElementById('time');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    //Call checkInputs function
    checkInputs();
});

function checkInputs() {
    //Get the values from the inputs 
    const nameValue = name.value.trim();
    const emailValue = emailaddress.value.trim();
    const numberValue = contactnumber.value.trim();
    const locationValue = location.value.trim();
    const dateValue = date.value.trim();
    const timeValue = time.value.trim();

    //Check to see if input is empty
    
    if (nameValue === '') {
        //show error
        //add error class 
        setErrorFor(name, 'Name cannot be blank');
    } else {
        //add success class
        setSuccessFor(name);
    }
}

function setErrorFor (input, message) {
    
}

