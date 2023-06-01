function validateForm() {
    var FirstName = document.myForm.FirstName.value;
    var firstnameError = document.getElementById("firstname-error");

    if (FirstName === null || FirstName === "") {
        firstnameError.textContent = "First name must be filled out";
        return false;
    } else {
        firstnameError.textContent = "";
    }

    if (FirstName.length > 20) {
        firstnameError.textContent = "First Name cannot be more than 20 characters";
        return false;
    } else {
        firstnameError.textContent = "";
    }

    if (!isNaN(FirstName)) {
        firstnameError.textContent = "First Name cannot be a number";
        return false;
    } else {
        firstnameError.textContent = "";
    }

// email//

var Email = document.myForm.Email.value;
var atpos = Email.indexOf("@");
var dotpos = Email.lastIndexOf(".");
var emailError = document.getElementById("email-error");

console.log(Email);
if (Email === null || Email === "") {
    emailError.textContent = "Email must be filled out";
    return false;
} else {
    emailError.textContent = "";
}

if (!isNaN(Email)) {
    emailError.textContent = "Email cannot be a number";
    return false;
} else {
    emailError.textContent = "";
}

if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= Email.length) {
    emailError.textContent = "Enter a valid email";
    return false;
} else {
    emailError.textContent = "";
}

    
// phone//

var Phone = document.myForm.Phone.value;
var numbers = /^[0-9]+$/;
var phoneError = document.getElementById("phone-error");

console.log(Phone);

if (Phone === null || Phone === "" || Phone.length > 15 || !Phone.match(/^\d+$/)) {
    phoneError.textContent = "Invalid Phone number";
    return false;
} else {
    phoneError.textContent = "";
}


//address//

var Address = document.myForm.Address.value;
var addressError = document.getElementById("address-error");

console.log(Address);
if (Address === null || Address === "") {
    addressError.textContent = "Address is required";
    return false;
} else {
    addressError.textContent = "";
}

// City

var city = document.myForm.city.value;
var cityError = document.getElementById("city-error");

console.log(city);
if (city === null || city === "") {
    cityError.textContent = "City is required";
    return false;
} else {
    cityError.textContent = "";
}


// zip//

var country = document.getElementById("Country").value;

if (country === "USA") {
    var zipcode = document.getElementById("zipcode").value;
    var zipcodeError = document.getElementById("zipcode-error");

    if (zipcode === null || zipcode === "" || !/^\d{5}$/.test(zipcode)) {
        zipcodeError.textContent = "Please enter a valid 5-digit ZIP code";
        return false;
    } else {
        zipcodeError.textContent = "";
    }
} else {
    var zipcodeError = document.getElementById("zipcode-error");
    zipcodeError.textContent = "";
}

// username //
    

var Username = document.myForm.Username.value;
    console.log(Username);
    if (Username==null || Username==="") {
    alert("Username must be filled out");
    return false;
    }
    console.log(Username.length);
    if (Username.length >12 )
    {
    alert("User name requires 12 character maximum");
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
    alert("Password minimim is 7 characters ");
    return false;
    }

    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one uppercase letter");
        return false;
    }

    if (!/[a-z]/.test(password)) {
        alert("Password must contain at least one uppercase letter");
        return false;
    }

    if (!/[!@#$%^&*]/.test(password)) {
        alert("Password must contain at least one special character");
        return false;
    }
    }