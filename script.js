const form      = document.getElementById('form');
const username  = document.getElementById('username');
const email     = document.getElementById('email');
const password  = document.getElementById('password');
const password2 = document.getElementById('password2');


//Show Failure (input error message):
function showFailure(input, message) {
  const formControl = input.parentElement;  //refer to index.html for info as to what we are grabbing here
  formControl.className = 'form-control failure';
  const small = formControl.querySelector('small'); //querySelector can take in a class, tag, id
  small.innerText = message; 
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'; //dictated from our css colors
}

//Check Email validation
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showFailure(input, "Email is not valid");
  } //use the .test() method here to see if the email String matches the the REGEX. If the match is successful, a boolean will be returned (true or false)
}

//Check Required fields
function checkRequired(inputArray) {
  inputArray.forEach(input => {
    console.log(input.value);
    if (input.value.trim() === '') {
      console.log(input.id);  //As you can see we are attached to the IDs of the form here
      showFailure(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
// Check Length of field inputs (be sure to keep track of where these functions are applied)
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showFailure(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showFailure(input, `${getFieldName(input)} must be less that ${max} characters`);
  } else {
    showSuccess(input); //Remember that this is pulling our green border from our CSS tie in
  }

}

// Get Fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//HERE IS THE REFACTOR THAT IS MORE SCALEABLE. 
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
});



