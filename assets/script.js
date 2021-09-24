// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  
  //Function to create password
  function generatePassword(){

    //lets user choose how long the password can be
    
    var passwordLength = parseInt(prompt("How long would you like your password to be, between 8 and 128?"));
    
    //checks if passwordLength is a number
    function checkPasswordString(){
      if(isNaN(passwordLength)){
        passwordLength = parseInt(prompt("Please choose a NUMBER between 8 and 128."));
        checkPasswordString()
      }
    }
    checkPasswordString()
    //checks if passwordLength is between 8-128
    function checkPasswordLength(){
      if(passwordLength < 8 || passwordLength > 128){
        passwordLength = prompt("Make sure the number you choose is between 8 and 128.")
        checkPasswordLength()
      }
      
    }
    checkPasswordLength()

    //Characters that password can use to be created
    var passwordOptions = {
      //base alphabet
      alphabet: "abcdefghijklmnopqrstuvwxyz",
      //with capitals
      alphabetCapital: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      //with numbers
      alphabetNumbers: "0123456789",
      //with symbols
      alphabetSymbols: "\"\\ !#$%&'()*+,-./:;<=>?@[]^_`{|}~"      
    }
    var selection = selectionHasOne();
    //password parameters
    function selectionHasOne(){
      selection = ""
      if(confirm("Do you want you password to contain lowercase letters?")){
        selection += passwordOptions.alphabet
      }
      if(confirm("Do you want your password to contain capital letters?")){
        selection += passwordOptions.alphabetCapital
      }
      if(confirm("Do you want your password to contain numbers?")){
        selection += passwordOptions.alphabetNumbers
      }
      if(confirm("Do you want your password to contain symbols?")){
        selection += passwordOptions.alphabetSymbols
      }
      //checks to see if you selected an option
      if(selection === ""){
        alert("You must select at least one option");
        selectionHasOne()
      }
      return selection
    }
    var finalPassword = ""
    //Loop that adds letters to password
    for(i=1; i<=passwordLength;i++){
      finalPassword += selection.charAt(Math.floor(Math.random()*selection.length))
    }
    
    
    return finalPassword;
  }
}

//function to copy password to device clipboard
function copyPassword(){
    document.querySelector("textarea").select();
    document.queryCommandId("Copy");
    alert("Password copied to clipboard!");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
