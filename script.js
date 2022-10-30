//declare variables

//varibles lowerCase, upperCase, numbersArr and specialArr
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["!", "@", "#", "$", "*", "%"];

function generatePassword() {
  //presents prompt for password lenght
  var passwordPrompt = prompt(
    "Choose a lenght of your password between 8 and 128"
  );
  passwordPrompt = Number(passwordPrompt);
  // console.log(passwordLength);
  if (passwordPrompt < 8 || passwordPrompt > 128) {
    alert("your password must be more than 8 and less than 128");
    return;
  }

  var hasLowerCase = confirm(
    "Click OK if you woud like to user lower case charachters in your password."
  );
  var hasUpperCase = confirm(
    "Click OK if you woud like to user upper case charachters in your password."
  );
  var hasSpecial = confirm(
    "Click OK if you woud like to user special charachters in your password."
  );
  var hasNumbers = confirm(
    "Click OK if you woud like to user numbers charachters in your password."
  );

  // Verify that at least one option was selcted
  if (
    hasLowerCase == false &&
    hasUpperCase == false &&
    hasSpecial == false &&
    hasNumbers == false
  ) {
    alert("you must select at lease one option");
    return;
  }
  //define new variable that is used to hold all charachters together to select from.
  // define new variable newChars to concatinate all varibles into
  var newChars = [];
  // if statement that check to see if prompt was selected and is true and pulls that into new varible, this is done for all four options
  if (hasLowerCase === true) {
    newChars = newChars.concat(lowerCaseArr);
  }
  if (hasUpperCase === true) {
    newChars = newChars.concat(upperCaseArr);
  }
  if (hasNumbers === true) {
    newChars = newChars.concat(numbersArr);
  }
  if (hasSpecial === true) {
    newChars = newChars.concat(specialArr);
  }
  // define var for the finalPassword.
  var finalPassword = [];
  // write a for loop that takes from passwordPromt that asked for "number of charachters and increases, by one to new.Chars, to the lenght identified.  It pulls from newChars and randomly selects one until it reaches length
  for (var i = 0; i < passwordPrompt; i++) {
    var randomIndex = Math.floor(Math.random() * newChars.length);
    finalPassword = finalPassword.concat(newChars[randomIndex]);
  }
  //using the join method to convert the array to a string minus the commas
  return finalPassword.join("");
  console.log(finalPassword);
}

//Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
