function validateForm() {
    var FirstName = document.myForm.FirstName.value;
    console.log(FirstName);
    if (FirstName==null || FirstName==="") {
    alert("First name must be filled out");
    return false;
    }
    console.log(FirstName.length);
    if (FirstName.length > 20)
    {
    alert("First Name can not be more than 20 charatcers");
    return false;
    
    }
    if (!isNaN(FirstName)) {
    alert("First Name cannot be a number");
    return false;
    }


    //last name//
    var LastName = document.myForm.LastName.value;
    console.log(LastName);
    if (LastName==null || LastName==="") {
    alert("Last name must be filled out");
    return false;
    }
    console.log(LastName.length);
    if (LastName.length > 50)
    {
    alert("Last Name can not be more than 50 charatcers");
    return false;
    
    }
    if (!isNaN(LastName)) {
    alert("Last Name cannot be a number");
    return false;
    }
// email//

var Email = document.myForm.Email.value;
    console.log(Email);
    if (Email==null || Email==="") {
    alert("Email must be filled out");
    return false;
    }
    console.log(Email.length);
    if (Email.length > 20)
    {
    alert("Email can not be more than 20 charatcers");
    return false;
    
    }
    if (!isNaN(Email)) {
    alert("Email cannot be a number");
    return false;
    }

// phone//

var Phone = document.myForm.Phone.value;
    console.log(Phone);
    if (Phone==null || Phone==="") {
    alert("Phone must be filled out");
    return false;
    }
    console.log(Phone.length);
    if (Phone.length > 15 || isNaN(Phone))
    {
    alert("Invalid Phone number");
    return false;
    
    }
    





//address//

var Address = document.myForm.Address.value;
    console.log(Address);
    if (Address==null || Address==="") {
    alert("Address must be filled out");
    return false;
    }

//city//

var city = document.myForm.city.value;
    console.log(city);
    if (city==null || city==="") {
    alert("City must be filled out");
    return false;
    }



// username //
    

var Username = document.myForm.Username.value;
    console.log(Username);
    if (Username==null || Username==="") {
    alert("Username must be filled out");
    return false;
    }
    console.log(Username.length);
    if (Username.length <12 )
    {
    alert("12 character maximum");
    return false;
    
    }
   



    // Password //
    

var password = document.myForm.password.value;
    console.log(password);
    if (password==null || password==="") {
    alert("Password must be filled out");
    return false;
    }
    console.log(password.length);
    if (password.length < 7)
    {
    alert("Maximum 7 characters ");
    return false;
    
    }
   
    
    }