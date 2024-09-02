
const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");



const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = "@#$%^&*()_+~|{}[]></-=";


const passwordGenerated = upperCase + lowerCase + numbers + specialChar;


generateBtn.addEventListener("click" , ()=>{


    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while(length > password.length)
    {
        password += passwordGenerated[Math.floor(Math.random() * passwordGenerated.length)];
    }
    passwordBox.value = password;
});


copyBtn.addEventListener("click" , ()=>{
    passwordBox.select();

    document.execCommand("copy");
})



