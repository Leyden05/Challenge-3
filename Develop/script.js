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

  var passwordLength = window.alert("Choose a number between 8 and 128");
  var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()";
  var passStart = "";

  for (var i = 0, n = pass)
  // must return a string value that is the password
  // CONSOLE.LOG ALMOST EVERYTHING
  // prompt user to choose num between 8 and 128
      //var to save length
    // confirm user choice
  window.confirm("Are you sure this is your choice?")
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
  return "hello"
}