function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phoneNo = document.getElementById("phoneNo").value;

    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const phoneNoError = document.getElementById("phoneNoError");

     //Regex for Phone no & Email Validation
     const mailformat    = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     const phoneno       = "[789][0-9]{9}";


    if (firstName.length < 2 ) {
        firstNameError.innerHTML = "Min 2 Char Required";
        return false;
    }
    // } else {
    //      return true; 
    // }

   
    if (lastName.length < 2 ) {
        lastNameError.innerHTML = "Min 2 Char Required";
        return false;
    }


    if (email == undefined || email == null || email == '' ) {
        emailError.innerHTML = "Please provide Email Id";
        return false;
    } else if(!email.match(mailformat)){
        emailError.innerHTML = "Please enter valid email address!";
        return false;
    }

    // if (phoneNo.length < 2 ) {
    //     phoneNoError.innerHTML = "Min 2 Char Required";
    //     return false;
    // }

     //Phone Validation
     if(phoneNo == undefined || phoneNo == null || phoneNo == ''){
        phoneNoError.innerHTML = "Please provide Mobile Number"; 
        return false;
    }else if(!phoneNo.match(phoneno)){
        phoneNoError.innerHTML = "Please provide valid Number";
        return false
    }else{
        phoneNoError.innerHTML('')
    }

    
}