function myFunction() {
  const fname = $("#fname").val();
  const lname = $("#lname").val();
  if (fname === "") {
    alert("Please Enter First Name");
    return false;
  }
  if (lname === "") {
    alert("Please Enter Last Name");
    return false;
  }
  return true;
}
