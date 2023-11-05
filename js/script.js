
    function validateForm() {
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var dob = document.getElementById('dob').value;
        var country = document.getElementById('country').value;
        var email = document.getElementById('email').value;
        var mobile = document.getElementById('mobile').value;
        var profession = document.getElementById('profession').value;
        var errorFirstName = document.getElementById('errorFirstName');
        var error = document.querySelectorAll('.error');

        var isValid = true;

        // Check First Name
        if (firstName === '') {
            document.getElementById("error-firstName").innerHTML = 'Please enter first name';
            isValid = false;
        }else{
            document.getElementById("error-firstName").innerHTML = '';
           
        }

        // Check Last Name
        if (lastName === '') {
            document.getElementById("error-lastName").innerHTML = 'Please enter last name';
            isValid = false;
        }else{
            document.getElementById("error-lastName").innerHTML = '';
           
        }

        // Check Date of Birth
        if (dob === '') {
            document.getElementById("error-dob").innerHTML = 'Please set the date of birth';
            isValid = false;
        }else{
            document.getElementById("error-dob").innerHTML = '';
           
        }

        // Check Country
        if (country === '') {
            document.getElementById("error-country").innerHTML = 'Please select country';
            isValid = false;
        }else{
            document.getElementById("error-country").innerHTML = '';
          
        }
   // Check Gender
   var genderOptions = document.querySelectorAll('input[type="radio"]');
        var selectedGender = false;
        for (var i = 0; i < genderOptions.length; i++) {
            if (genderOptions[i].checked) {
                selectedGender = true;
                break;
            }
        }
        if (!selectedGender) {
            document.getElementById("error-gender").innerHTML= 'Please select a gender';
            isValid = false;
        }else{
            document.getElementById("error-gender").innerHTML= '';
        }
         // Check Date of Birth
  if (profession === '') {
            document.getElementById("error-profession").innerHTML = 'Please enter the profession';
            isValid = false;
        }else{
            document.getElementById("error-profession").innerHTML = '';
            
        }

        // Check Email
        if (email === '') {
            document.getElementById("error-email").innerHTML = 'Please enter the email address';
            isValid = false;
        } else if (!isValidEmail(email)) {
            document.getElementById("error-email").innerHTML = 'Please enter valid email address';
            isValid = false;
        }else{
            document.getElementById("error-email").innerHTML = '';
            
        }
 

        // Check Mobile Number
        if (mobile === '') {
            document.getElementById("error-mobile").innerHTML= 'Please enter mobile number';
            isValid = false;
        } else if (!isValidMobile(mobile)) {
            document.getElementById("error-mobile").innerHTML = 'Please enter valid mobile number';
            isValid = false;
        }else{
            document.getElementById("error-mobile").innerHTML = '';
           
        }
      
     
      
if(isValid==true){
    var form = document.getElementById("surveyForm");
    var formData = new FormData(form);
  

    document.getElementById("resultFirstName").textContent = formData.get("firstName");
    document.getElementById("resultLastName").textContent = formData.get("lastName");
    document.getElementById("resultDOB").textContent = formData.get("dob");
    document.getElementById("resultCountry").textContent = formData.get("country");
    document.getElementById("resultGender").textContent = formData.get("gender");
    document.getElementById("resultProfession").textContent = formData.get("profession");
    document.getElementById("resultEmail").textContent = formData.get("email");
    document.getElementById("resultMobile").textContent = formData.get("mobile");
    openpopup();
}
        


        return isValid;
    }

    function openpopup(){
        
        var popup = document.getElementById('popup');
        popup.style.display = 'block';
    }

    function isValidEmail(email) {
        var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidMobile(mobile) {
        var mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
    }



    
          function closePopup() {
       
        document.getElementById("popup").style.display = "none";
        document.getElementById("surveyForm").reset();
    }

    function resetForm() {
       
        document.getElementById("surveyForm").reset();
    }
  
