function spell_check() {
  //const word = document.getElementById("word").value;
  //document.getElementsByID("sug").classList.toggle("show");

  fetch("http://localhost:8090")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => { console.log(data) })
    .catch(error => { console.error('Error:', error)});

}