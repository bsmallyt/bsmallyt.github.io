const url = "http://localhost:8090"

function spell_check() {
  //show the list of word suggestions (if not showing)
  element = document.getElementById("suggestion").classList
  if (!element.contains("show")) {
    element.add("show");
  }

  //set apiUrl with word as parameter
  const params = {
    val: "spellcheck",
    word: document.getElementById("word").value
  }
  const apiUrl = new URL(url)
  Object.keys(params).forEach(key => apiUrl.searchParams.append(key, params[key]));

  //remove items from the list
  const list = document.getElementById('suggestion');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  const newItem = document.createElement('li');
  newItem.textContent = apiUrl;
  list.appendChild(newItem);

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('response was not ok');
      }
      return response.json();
    })
    .then(data => { 
      data.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        list.appendChild(listItem);
      });
    })
    .catch(error => { console.error('Error:', error)});
}