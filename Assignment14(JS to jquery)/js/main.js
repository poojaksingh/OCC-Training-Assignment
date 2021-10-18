// const root = document.getElementById("root");
const root = $("#root")[0];

// const ul = document.createElement("ul");
const ul = $("<ul></ul>");

function loadJsonArray() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const people = JSON.parse(this.responseText);

    const list = people.people;
    for (i in list) {
      //   const li = document.createElement("li");
      //   li.innerText = list[i].firstName + " " + list[i].lastName;
      const li = $("<li></li>").text(
        list[i].firstName + " " + list[i].lastName
      );
      //   ul.appendChild(li);
      $(ul).append(li);
    }
    // root.appendChild(ul);
    $(root).append(ul);
  };
  xmlhttp.open("GET", "people.json");
  xmlhttp.send();
}
