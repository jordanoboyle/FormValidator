const form      = document.getElementById('form');
const username  = document.getElementById('username');
const email     = document.getElementById('email');
const password  = document.getElementById('password');
const password2 = document.getElementById('password2');


//Show Failure (input error message):
function showFailure(input, message) {
  const formControl = input.parentElement;  //refer to index.html for info as to what we are grabbing here
  formControl.className = 'form-control failure';
}

//we need an event listener here for our form:

form.addEventListener('submit', function(e) {
  e.preventDefault();  // this prevents the form from doing what it's supposed to do (think REACT)
  console.log("submit");
  console.log(username.value);

  if (username.value === '') {
    // alert("username required");
    showFailure(username, "Username is required");
  } else {
    showSuccess(username);
  }
});

