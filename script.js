const generateBtn = document.getElementById("generate-btn")
const inputPassword = document.getElementById("generate-password");

function generatePassword(length){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = "";
    for(let i = 0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

generateBtn.addEventListener("click",()=>{
    const passwordLength = generatePassword(16);
    inputPassword.value = passwordLength;
})