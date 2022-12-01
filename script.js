var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  // YOUR CODE GOES HERE
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0987654321";
  var password = "";
  var characters = "";
  var isUppercase =  confirm("Would you like to use uppercase?");
  var isLowercase = confirm("Would you like to use lowercase?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");
  var isLength = parseInt(prompt("Choose password length from 8 to 128"));


    if (isLength < 8 || isLength > 128) { 
        alert("Please choose a number between 8 and 128.");
        return "";
    }
  
    if (isUppercase) {
        characters += upper;
        ensure += upper[random];

    }else{
  
    }
  
    if (isLowercase) {
        characters += lower
    }else{
  
    }
  
    if (isSpecial) {
        characters += special
    }else{
  
    }
  
    if (isNumber) {
        characters += numbers
    }else{
  
    }

    if (isUppercase || isLowercase || isSpecial || isNumber) {
      var random = Math.floor(Math.random() * characters.length);
      password += character{random}
    }else{
      alert("Please choose one option");
    }
    

    return password.slice(ensure.length)+=(ensure);
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