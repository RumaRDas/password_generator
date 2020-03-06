
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

//only password will work between 8 to 128 number
if (inputplength.value >=8 && inputplength.value <=128){
  plength = parseInt(inputplength.value);
  console.log(plength);
// for use uppercase in passwordType
 if( inputUppercase.checked){
    passwordType += uppercase;
  console.log(passwordType);
}
// for use Lowercase in passwordType
if(inputLowercase.checked){
passwordType += lowercase;
console.log(passwordType);
}
// for use numbers in passwordType
if(inputnumber.checked){
passwordType+=numbers;
console.log(passwordType);
}
// for use Special character in passwordType
if(inputsymbol.checked){
passwordType+=symbols;
console.log(passwordType);
}

// for finding out the password type according to user choices:
for (let i = 0; i < plength; i++) {
  userPassword += passwordType.charAt(
    Math.floor(Math.random() * passwordType.length)
  );
  }
  //if all criteria are fullfill password will show in textarea
  passwordFeild.innerHTML = userPassword;
  alertbox.innerHTML= "";
  console.log(userPassword)

}else if(inputplength.value <= 8){
  //if all criteria are not full s password will not generate
   alertbox.innerHTML="Your length is too low";

}
else{
  //if all criteria are not full s password will not generate
   alertbox.innerHTML="Your length is too high";

}


}
// adding click evevt on id="generate" button and giving function write Password to get the Password
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