var username = document.getElementById("username")
var password = document.getElementById("password");
var submit = document.getElementById("submit");


submit.addEventListener('click', checkForm)

function checkForm() {
  if (checkPassword() && checkUsername() ) {
    alert("You're in, Welcome to the Eye")
  }else {
    alert("We don't want you")
  }
}


function checkPassword() {
  if (password.value == 1234) {
    return true
  }else {
      // console.log('password is incorrect');
  }
}

function checkUsername() {
  var splitUser = username.value.split("")
  for (let i=0; i<splitUser.length; i++) {
    if (splitUser[i] == 1 || splitUser[i] == 2 || splitUser[i] == 3 || splitUser[i] == 4 || splitUser[i] == 5 || splitUser[i] == 6 || splitUser[i] == 7 || splitUser[i] == 8 || splitUser[i] == 9 || splitUser[i] == 0) {
      return true
    }else {
      // console.log("this is invaild");
    }
  }
  // console.log(splitUser);
}
