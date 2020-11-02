var password_value, name_value, mail_value; 

// ! HAVE TO GIVE SOME CONSTRAINTS OVER THE NAME INPUT (REGEX PATTERN)

function name_check(){
     var user_form_name, user_form_name_valid; 
     user_form_name  = document.getElementById('username');
     user_form_name_valid = user_form_name.checkValidity();
     name_value = user_form_name.value;
     console.log("Name Validation Works!!!!");
     console.log(name_value);
}

function mail_check(){
    var user_form_mail, user_form_mail_valid;
    user_form_mail = document.getElementById("mail");
    user_form_mail_valid = user_form_mail.checkValidity();
    if(!user_form_mail_valid){
        alert("Your email do not match the given requirements!");
    }
    mail_value = user_form_mail.value
    console.log("Mail Validation Works!!!!");
    console.log(mail_value);
}

function password_check(){
     var user_form_password, user_form_password_valid;
     user_form_password = document.getElementById("pass");
     user_form_password_valid = user_form_password.checkValidity();
   if(!user_form_password_valid){
        alert("Your password do not match the given requirements!");
    }
   
    else{
      password_value = user_form_password.value;
       document.getElementById('validate-button').style.cursor = "pointer";
       document.getElementById('validate-button').disabled = false;
    }
    console.log("Password Validation Works!!!!");
    console.log(password_value);
}

// ? VALIDATOR FUNCTION
function validate_data(){
    var user_name = document.getElementById('username');
    var user_mail = document.getElementById('mail');
    var user_password = document.getElementById('pass');
    var login_button = document.getElementById('login-button')

    var user_name_valid = user_name.checkValidity();
    var user_mail_valid = user_mail.checkValidity()
    var user_password_valid = user_password.checkValidity();
    
    if(user_name_valid && user_mail_valid && user_password_valid){
        login_button.disabled = false;
        login_button.style.cursor = "pointer";
        alert("Validation successful!!!!");
    }
    else{
        login_button.disabled = true;
        login_button.style.cursor = "not-allowed";
        alert("Validation failed!!!!");
    }
  }

function display_user() {
  var login_form = document.getElementById("opened");
  var user_interface = document.getElementById("closed");
  var Name_of_user, Mail_of_user, Login_of_user;
  Name_of_user = document.getElementById("name_of_user");
  Mail_of_user = document.getElementById("mail_of_user");
  Login_of_user = document.getElementById("login_of_user");
  Name_of_user.innerHTML = name_value;
  Mail_of_user.innerHTML = mail_value;
  console.log(Name_of_user);
  console.log(Mail_of_user);
  console.log("This Works!!!!!");
  login_form.id = "closed";
  user_interface.id = "opened";
  alert("Login Successful!");
}




// ? LOOP METHOD (VALIDATION)
// var user_name_valid, user_mail_valid, user_password_valid;
// function submitform() {
//     console.log("Works!!");
//   var f = document.getElementsByTagName("form");
//   var error_found = false;
//   for(var element = 0; element < f.length(); element++){
//       if (f[element].checkValidity()) {
//         f[element].submit();
//       } 
//       else {
//         error_found = true;  
//         break;
//       }
//   }
//   if(error_found){
//     alert(document.getElementById("example").validationMessage);
//   }
//  else{
//     display_user();
//  }
// }

// ? IMPORTANT METHOD WHEN WE USE BUTTON AS A SUBMIT BUTTON
/* <script>
const signUpForm = document.getElementById('signUpForm');
const emailField = document.getElementById('emailField');
const okButton = document.getElementById('okButton');

emailField.addEventListener('keyup', function (event) {
  isValidEmail = emailField.checkValidity();

  if ( isValidEmail ) {
    okButton.disabled = false;
  } else {
    okButton.disabled = true;
  }
});

okButton.addEventListener('click', function (event) {
  signUpForm.submit();
});

.email-field:valid {
  border-color: black;
}
.email-field:invalid {
  border-color: red;
} */