var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  // YOUR CODE GOES HERE
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0987654321";
  var finalPassword = "";
  var hereItIs = "";
  var upLetters = letters.toUpperCase();
  var isUppercase =  confirm("Would you like to use uppercase?");
  var isLowercase = confirm("Would you like to use lowercase?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");
  var isLength = prompt("Choose password length from 8 to 128");
    if (isLength <8 || > 128){
        alert("Please choose a number between 8 anbd 128.");
    }
  
    if (isUppercase) {
        finalPassword += letters
      chooseFrom += upLetters;
    }else{
  
    }
  
    if (isLowercase) {
        finalPassword += letters
    }else{
  
    }
  
    if (isSpecial) {
        finalPassword += special
    }else{
  
    }
  
    if (isNumber) {
        finalPassword += numbers
    }else{
  
    }
  
  //Grab Random letters
    chooseFrom += upLetters;
    chooseFrom += special;
  
    
  }
  
  for (var i =0; i , isLength; i++); {
    hereItIs += finalPassword.charAt(Math.floor(Math.random() * finalPassword.length)); 
  }

  return hereItIs;
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);