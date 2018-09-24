var imRight = document.getElementById("imRight");
var noIAm = document.getElementById("noIAm");
var rightText = document.getElementById("rightText");
var iAmText = document.getElementById("iAmText");


imRight.addEventListener("click", me);
  function me() {
    rightText.innerHTML = "Im Right";
    imRight.style.backgroundColor = "red";
    // iAmText.innerHTML = " ";
    // noIAm.style.backgroundColor = "white";
  }

noIAm.addEventListener("click", noMe);
  function noMe() {
      iAmText.innerHTML = "No, Im Right";
      noIAm.style.backgroundColor = "red";
      // imRight.style.backgroundColor = "white";
      // rightText.innerHTML = " ";

  }
