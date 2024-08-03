
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

