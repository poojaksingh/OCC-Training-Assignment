
function arrayData() {
  const root = document.getElementById("root");
  const ul = document.createElement("ul");
  this.loadJsonArray = function () {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
      const people = JSON.parse(this.responseText);
      //  document.getElementById("root").innerHTML = people.people[0].firstName;
      const list = people.people;
      for (i in list) {
        const li = document.createElement("li");
        li.innerText = list[i].firstName + " " + list[i].lastName;
        ul.appendChild(li);
      }
      root.appendChild(ul);
    }
    xmlhttp.open("GET", "people.json");
    xmlhttp.send();
  }
}

ko.applyBindings(new arrayData());


