var h1 = document.getElementById("h1");

document.addEventListener('keypress', (event) => {
   keyName = event.key;
  // alert(keyName);
  h1.innerHTML = keyName;
  
});
