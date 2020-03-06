
//event building
// declearing var for  criteria for selection
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var numbers ="0123456789";
var symbols ="!@#$%^&*()_+~`|][{}:;'?/>.<,=-[";


//var generateBtn =document.getElementById("generate");
var passwordFeild = document.querySelector("#password");
//taking a var for the user input
var inputUppercase = document.querySelector("#uppercase");
var inputLowercase = document.querySelector("#lowercase");
var inputnumber = document.querySelector("#number");
var inputsymbol = document.querySelector("#symbols");
var inputplength = document.querySelector("#length");
//var for  password finding
var generateBtn = document.querySelector("#generate");
var alertbox = document.querySelector("#alert");
var userPassword;
var passwordType;
var plength;
// getting  usrep
// selecting var criteria list making a new const
const criteriaList = document.querySelector('#pass-gen');
//hide button adding margin in
const hideButton = document.querySelector("#hide-option").style.margin = "80px 10px 80px 10px";
var hidden = false;

 // for hiding the criteria to view
const hideBox =document.querySelector('#hide-option');
hideBox.addEventListener('click', function(e){
    if(hidden){
      criteriaList.style.display = "none";
       
    }else{
      criteriaList.style.display ="initial";
      hideBox.style.display += "none";
    }
});

// Assignment Code
// Write password to the #password input
function writePassword() {
  userPassword ="";
  passwordType ="";
//inputplength = parseInt(inputplength.value);

if (inputplength.value >=8 && inputplength.value <=128){
  plength = parseInt(inputplength.value);
  console.log(plength);

  
}else{
  alertbox.innerHTML="Your Input number is not wright"
}

}

generateBtn.addEventListener("click", writePassword);

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