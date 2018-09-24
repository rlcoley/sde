var userName = document.getElementById('userName');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var submit = document.getElementById("submit")

submit.addEventListener('click', checkForNumber);
function checkForNumber() {
    if (pass === '12345678') {
      alert("good")
    }else {
      alert("Password invaild")
  }


    // if (userName.includes(1,2,3,5,6,7,8,9,0 ) == false ) {
    //   alert("Needs Number")
    // }


}
