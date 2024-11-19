function spell_check() {
  //const word = document.getElementById("word").value;
  //document.getElementsByID("sug").classList.toggle("show");

  fetch("https://imagedelivery.net/JFKtCgwTPfudztWkJA41Xw/443a76c4-1d41-4c39-5bda-412524576e00/public")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => { console.log(data) })
    .catch(error => { console.error('Error:', error)});

}