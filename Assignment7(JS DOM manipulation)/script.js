function addItem() {
  var ul = document.getElementById("dynamic-list");
  var uniqueId = document.getElementById("uniqueId");
  var li = document.createElement("li");

  li.appendChild(document.createTextNode(uniqueId.value));
  ul.appendChild(li);
}

function removeItem() {
  var ul = document.getElementById("dynamic-list");

  var item = document.getElementById(uniqueId.value);
  ul.removeChild(item);
}
