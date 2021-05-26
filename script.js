// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Array of Characters
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var specialCharacters = [" ", "!", "#", "$", "%" ,"&", "'","(",")","*","+","-", ".", "/", ":", ";", "<", '"',"=",">", "?", "@","[,", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

// Password generator
function generatePassword() {
  var allowedCharacters = []
  var gate = false

  var howLong = prompt("How long do you want the password to be? Must be between 8 and 128");
  while (howLong < 8 || howLong > 128){
    alert("The number must be between 8 and 128, please try again");
    howLong = prompt("How long do you want the password to be? Must be between 8 and 128");
  }

  var lowerCase = prompt("Do you want to include lowercase letters? (Yes/No)");
  while (gate === false){
    if (lowerCase === "Yes" || lowerCase === "No"){
      gate = true
    }
    else{
    alert("Please only enter Yes or No");
    lowerCase = prompt("Do you want to include lowercase letters? (Yes/No)");
    }
  }

  gate = false
  var upperCase = prompt("Do you want to include uppercase letters? (Yes/No)");
  while (gate === false){
    if (upperCase === "Yes" || upperCase === "No"){
      gate = true
    }
    else{
    alert("Please only enter Yes or No");
    upperCase = prompt("Do you want to include uppercase letters? (Yes/No)");
    }
  }

  gate = false
  var numeric = prompt("Do you want to include numbers? (Yes/No)");
  while (gate === false){
    if (numeric === "Yes" || numeric === "No"){
      gate = true
    }
    else{
    alert("Please only enter Yes or No");
    numeric =  prompt("Do you want to include numbers? (Yes/No)");
    }
  }

  gate = false
  var specialChar = prompt("Include special characters? (Yes/No)");
  while (gate === false){
    if (specialChar === "Yes" || specialChar === "No"){
      gate = true
    }
    else{
    alert("Please only enter Y or N");
    specialChar = prompt("Do you want to include special characters? (Yes/No)");
    }
  }
  
  if (lowerCase == "Yes"){
    for(var i = 0; i < lowerCasedCharacters.length; i++){
      allowedCharacters.push(lowerCasedCharacters[i])
    }
  }

  if (upperCase == "Yes"){
    for(var i = 0; i < upperCasedCharacters.length; i++){
      allowedCharacters.push(upperCasedCharacters[i])
    }
  }

  if (numeric == "Yes"){
    for(var i = 0; i < numericCharacters.length; i++){
      allowedCharacters.push(numericCharacters[i])
    }
  }

  if (specialChar == "Yes"){
    for(var i = 0; i < specialCharacters.length; i++){
      allowedCharacters.push(specialCharacters[i])
    }
  }
  
  var characters = "";
  var max = allowedCharacters.length;
  for(var i =0; i < howLong; i++){
    var pick = Math.floor(Math.random()*max - 0 +1) +0;
    var choice = allowedCharacters[pick];
    characters = characters + choice;

  }

  return characters;

  
}

