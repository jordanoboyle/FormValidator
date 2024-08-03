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

//Validate Email
function isEmailValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase()); //use the .test() method here to see if the email String matches the the REGEX. If the match is successful, a boolean will be returned (true or false)
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
  })
}
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//HERE IS THE REFACTOR THAT IS MORE SCALEABLE. 
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
});

// //BELOW IS THE INITIAL BUILD WITH CONDITIONAL IF STATEMENTS.
// //we need an event listener here for our form:
// form.addEventListener('submit', function(e) {
//   e.preventDefault();  // this prevents the form from doing what it's supposed to do (think REACT)
//   console.log("submit");
//   console.log(username.value);

//   if (username.value === '') {
//     // alert("username required");
//     showFailure(username, "Username is required");
//   } else {
//     showSuccess(username);
//   }
//   if (email.value === '') {
//     // alert("email required");
//     showFailure(email, "Email is required");
//   } else if (!isEmailValid(email.value)) {
//     showFailure(email, "Email is not valid.");
//   } else {
//     showSuccess(email);
//   }
//   if (password.value === '') {
//     showFailure(password, 'Password required');
//   } else {
//     showSuccess(password);
//   }
//   if (password2.value === '') {
//     showFailure(password2, 'Password2 required');
//   } else {
//     showSuccess(password2);
//   }
// });

