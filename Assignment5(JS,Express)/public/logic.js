function myFunction() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
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
