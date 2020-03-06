
//event building
// declearing the criteria for ption var lowercase ="abcdefghijklmnopqrstuvwxyz";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var numbers ="0123456789";
var symbols ="!@#$%^&*()_+~`|][{}:;'?/>.<,=-[";


var generateBtn =document.getElementById("generate");
var passwordFeild = document.getElementById("#password");
//declearing the userinput
var inputUppercase = document.getElementById("#uppercase");
var inputLowercase = document.getElementById("#lowercase");
var inputnumber = document.getElementById("#number");
var inpusymbol = document.getElementById("#symbols");
var lengthInput = document.getElementById("#length");
var generateBtn = document.querySelector("#generate");

var userPassword;
var passwordType;
var plength;
// getting  usrep
// selecting criteria list making a new const
const criteriaList = document.querySelector('#pass-gen');
const hideButton = document.querySelector("#hide-option").style.margin = "80px 10px 80px 10px";
var hidden = false;
 // for hiding the criteria to view

  //for password length
 
  plength = Number(lengthInput.value);
  for (let i = 0; i < plength; i++) {
          userPassword += passwordType.charAt(
            Math.floor(Math.random() * passwordType.length)
          ); 
          if (inputplength >=8 && inputplength <=128){
            document.getElementById("#password").innerHTML = userPassword;
   }else{
     const alertbox = document.getElementById('#alert');
     alertbox.innerHTML =" your length input is not Wright";
   }
   }

})



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