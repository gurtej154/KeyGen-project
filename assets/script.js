// Assignment Code
var generateBtn = document.querySelector("#generate");

//Various increments to choose password characters
var passwordOptions = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    SpecialChar: "!@#$%^&*()/\?><}{~,"
}
//Type password into input terminal 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

    //Function to produce a new password
    function generatePassword() {

        var passwordLength = parseInt(prompt("How long would you like your password to be, between 8 and 128?"));

        //checks if passwordLength is a number
        function identifyPasswordString() {
            if (isNaN(passwordLength)) {
                passwordLength = parseInt(prompt("Please choose a NUMBER between 8 and 128."));
                identifyPasswordString()
            }
        }
        identifyPasswordString()
        //identifies the amount of characters within the new password.
        function PasswordLength() {
            if (passwordLength < 8 || passwordLength > 128) {
                passwordLength = prompt("Make sure the number you choose is between 8 and 128.")
                PasswordLength()
            }

        }
        PasswordLength()

        var choice = optionOne();
        //Following allocates options of various characters for the new password 
        function optionOne() {
            choice = ""
            if (confirm("Press OK for the password to contain lowercase letters or press cancel.")) {
                choice += passwordOptions.lowerCase
            }
            if (confirm("Press OK for the password to contain uppercase letters or press cancel.")) {
                choice += passwordOptions.upperCase
            }
            if (confirm("Press OK for the password to contain number letters or press cancel.")) {
                choice += passwordOptions.numbers
            }
            if (confirm("Press OK for the password to contain special characters or press cancel.")) {
                choice += passwordOptions.SpecialChar
            }
            //Expresses to the user to choose a option from the list
            if (choice === "") {
                alert("Select at least ONE given option!");
                optionOne()
            }
            return choice
        }
        var Password = ""
        for (i = 1; i <= passwordLength; i++) {
            Password += choice.charAt(Math.floor(Math.random() * choice.length))
        }

        return Password;
    }
}
//Function to copy password from input to clipboard by clicking the copy button 
function copyPassword() {
    /* Get the text field */
    var copyText = document.getElementById("textarea");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.textarea);
    
    /* Alert the copied text */
    alert("Copied the text: " + copyText.textarea);
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

