const form = document.getElementById('form');

const name = document.getElementById('name');
const emailaddress = document.getElementById('emailAddress');
const contactnumber = document.getElementById('contactNumber');
//const location = document.getElementById('location');
const date = document.getElementById('date');
const time = document.getElementById('time');

form.addEventListener('submit', e => {

     e.preventDefault();

    //Call checkInputs function
    checkInputs();
});

function checkInputs() {
    //Get the values from the inputs 
    const nameValue = name.value();
    const emailValue = emailaddress.value();
    const numberValue = contactnumber.value();
    const locationValue = location.value();
    const dateValue = date.value();
    const timeValue = time.value();

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
    const formGroup = input.parentElement; 
    const small = formGroup.querySelector('small');

    //add error message inside small tag
    small.innerText = message;

    //add error class
    formGroup.className = 'formGroup error'; 

}

