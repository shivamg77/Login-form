function SignIn() {
  var emailSignIn = document.getElementById("emailsignIn").value;
  var pwdSignIn = document.getElementById("pwdSignIn").value;

  var dataSignIn = {
    email: emailSignIn,
    password: pwdSignIn
  };

  console.log(dataSignIn);
  alert(JSON.stringify(dataSignIn));
}

function SignUp() {
  var nameSignUp = document.getElementById("nameSignUp").value;
  var emailSignUp = document.getElementById("emailSignUp").value;
  var pwdSignUp = document.getElementById("pwdSignUp").value;

  var dataSignUp = {
    name: nameSignUp,
    email: emailSignUp,
    password: pwdSignUp
  };
  console.log(dataSignUp);
  alert(JSON.stringify(dataSignUp));
}
