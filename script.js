var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  // YOUR CODE GOES HERE
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0987654321";
  var password = "";
  var upLetters = letters.toUpperCase();
  var isUppercase =  confirm("Would you like to use uppercase?");
  var isLowercase = confirm("Would you like to use lowercase?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");
  var isLength = prompt("Choose password length from 8 to 128");
    if (isLength < 8 || isLength > 128) { 
        alert("Please choose a number between 8 and 128.");
    }
  
    if (isUppercase) {
        password += letters
    }else{
  
    }
  
    if (isLowercase) {
        password += letters
    }else{
  
    }
  
    if (isSpecial) {
        password += special
    }else{
  
    }
  
    if (isNumber) {
        password += numbers
    }else{
  
    }
    var hereItIs = "";
  
    for (var i =0; i , isLength; i++); {
      hereItIs += password.charAt(Math.floor(Math.random() * password.length)); 
    }

    return password;
  //Grab Random letters
   
    
  }
  

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);