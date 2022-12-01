// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  // YOUR CODE GOES HERE
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0987654321";
  var upLetters = letters.toUpperCase();
  var isUppercase =  confirm("Would you like to use uppercase?");
  var isLowercase = confirm("Would you like to use lowercase?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");

  if (isUppercase) {
    // use Uppercase letters
    console.log("uppercase");
    chooseFrom += upLetters;
  }

  if (isLowercase) {
    // use Lowercase letters
    console.log("lowercase");
  }

  if (isSpecial) {
    // use Uppercase letters
    console.log("special");
  }

  if (isNumber) {
    // use Uppercase letters
    console.log("number");
  }

//Grab Random letters
  chooseFrom += upLetters;
  chooseFrom += special;

  return ";"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);