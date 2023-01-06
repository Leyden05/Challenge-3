// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordLength = window.prompt("Choose a number between 8 and 128. This will be the length of your password.");
  var upperCaseChoice = window.prompt("Do you want uppercase characters in your password?");
  var lowerCaseChoice = window.prompt("Do you want lowercase characters in your password?");
  var numbersChoice = window.prompt("Do you want numbers in your password?");
  var specialCharactersChoice = window.prompt("Do you want special characters in your password?");

  var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789/.;[]?><{}+_=-)(*&^%$#@!";
  var passStart = "";

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["/", ".",";", "[", "]", "?", ">", "<", "{", "}", "+", "_", "=", "-", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!"];

  for (var i = 0, n = char.length; i < passwordLength; ++i) {
    passStart += char.charAt(Math.floor(Math.random() * n));
  }
  
  window.alert(passStart);
  console.log(passStart);
  return passStart;
}




  // must return a string value that is the password
  // CONSOLE.LOG ALMOST EVERYTHING
  // prompt user to choose num between 8 and 128
      //var to save length
    // confirm user choice
  // confirm("are you sure you want to ___");
  // confirm user upper, lower, num, special characters (4 confirm prompts)
   // Validate that at least one category was chosen
      // 4 vars to save T/F to included characters
  // Vars that include all user options of each category. Array of string for each cat.
  // var upper = ["A", "B", "C"]
  // combine into one final array with user data
  // If user says yes to include that category, then choose random(math.random) elements from the array
    // if else statement
    // FOR loop will be in the code somewhere (NOT NECESSARILY HERE)
  // How to decide how many elements to choose from array
  // Randomly choose x number of elements from each array
  // Join chosen elements into a string
  //return passwordString;
//   return "hello"
// }