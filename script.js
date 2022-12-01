// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  // YOUR CODE GOES HERE
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0987654321";
  var passwordLength = 8;
  var password = "";
  var upLetters = letters.toUpperCase();
  var isUppercase =  confirm("Would you like to use uppercase?");
  var isLowercase = confirm("Would you like to use lowercase?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");
for (var i = 0; i > 8 && i< 128; i++) {
  var random =Math.floor(Math.random() * letters.length);
}

  if (isUppercase) {
    // use Uppercase letters
    var random =Math.floor(Math.random() * letters.length);
    chooseFrom += upLetters;
  }else{

  }

  if (isLowercase) {
    password.outcome[1] = Math.floor(Math.random() * letters.length);
    console.log(password.outcome[2]);
  }else{

  }

  if (isSpecial) {
    var random = Math.floor(Math.random() * special.length);
  }else{

  }

  if (isNumber) {
    var random = Math.floor(Math.random() * numbers.length);
  }else{

  }

//Grab Random letters
  chooseFrom += upLetters;
  chooseFrom += special;

  return password.outcome.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);