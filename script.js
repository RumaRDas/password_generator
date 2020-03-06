
//event building
// selecting criteria list making a new const
const criteriaList = document.querySelector('#pass-gen');
const hideButton = document.querySelector("#hide-option").style.margin = "80px 10px 80px 10px";
var hidden = false;
 // for hiding the criteria to view
 
const hideBox =document.querySelector('#hide-option');
hideBox.addEventListener('click', function(e){
    if(hidden){
      criteriaList.style.display = "none";
       
    }else{
      criteriaList.style.display ="initial";
      hideButton = document.querySelector("#hide-option").style.display = "none";
    }
});





/*
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
*/