function getJsonData() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const person = JSON.parse(this.responseText);
    var rootdata = $("#root").html(person.firstName + " " + person.lastName);
    console.log("rootdata", rootdata);
  };
  xmlhttp.open("GET", "person.json");
  xmlhttp.send();
}
