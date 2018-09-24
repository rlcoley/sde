var h1 = document.getElementsByTagName("h1")[0];

document.addEventListener('keypress', (event) => {
  const keyName = event.key;
  h1.addEventListener.innerHTML = event.key
  alert('keypress event\n\n' + 'key: ' + keyName);
});
