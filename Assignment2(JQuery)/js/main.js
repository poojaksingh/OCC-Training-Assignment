// function doSomethingWhenDocumentReady(){
//     console.log("Do something when dom tree is ready!");

// }
// $(document).ready(doSomethingWhenDocumentReady);

// $(document).ready(function () {
//     // once dom ready what you want to do mention here 
//     $("h1").click(function () {
//         alert("h1 clicked ");
//         $("section").css("background-color", "navy");
//         $("section").css("color", "white");

//     });

//     $("h1").click(function () {
//         alert("h1 clicked ");
//         $("section").css("background-color", "navy");
//         $("section").css("color", "white");

//     });

// })



$(document).ready(function() {

    $('#first_form').submit(function(e) {
      e.preventDefault();
      var first_name = $('#first_name').val();
      var last_name = $('#last_name').val();
      var email = $('#email').val();
      var phoneNo = $('#phoneNo').val();
  
      $(".error").remove();
  
      if (first_name.length < 2) {
        $('#first_name').after('<span class="error">Min 2 char required</span>');
      }
      if (last_name.length < 2) {
        $('#last_name').after('<span class="error">Min 2 char required</span>');
      }
      if (email.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
      } else {
        var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var validEmail = regEx.test(email);
        if (!validEmail) {
          $('#email').after('<span class="error">Enter a valid email</span>');
        }
      }

      if (phoneNo == undefined || phoneNo == null || phoneNo == '') {
          console.log("phone enter");
        $('#phoneNo').after('<span class="error">This field is required</span>');
      } else {

        var regexPattern=new RegExp(/^[0-9-+]+$/);    // regular expression pattern
        var validPhoneNo = regexPattern.test(phoneNo); 
        // var regEx = /^[0-9-+]+$/;
        // var validPhoneNo = regEx.test(phoneNo);
        if (!validPhoneNo) {
          $('#phoneNo').after('<span class="error">Enter a valid Phone Number</span>');
        }
      }
     
    });
  
  });