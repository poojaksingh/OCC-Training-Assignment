function addItem() {
  console.log("Adding elements in the list");

  var uniqueId = $("#uniqueId").val();
  var li = document.createElement("li");
  li.append(document.createTextNode(uniqueId));
  //   ul.append(li);
  $("#dynamic-list").append(li);
}
