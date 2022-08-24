const myBtn = document.querySelector(".btn");
const myInput = document.getElementById("passwordInput");
const copyIcon = document.querySelector(".bx-copy");
const copiedAlert = document.querySelector(".alertCopied");

myBtn.addEventListener("click", () => {
  createPassword();
});

copyIcon.addEventListener("click", () => {
  copyPassword();
  if (myInput.value) {
     copiedAlert.classList.remove("active");
     setTimeout(() => {
       copiedAlert.classList.add("active");
     }, 2000);
  }
 
});

function createPassword() {
  const charaterZ =
    "0123456789:abcdefghijklmnopqrstuvwxtz:!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordKey = 12;
  let password = "";
  for (let index = 0; index < passwordKey; index++) {
    const randomNum = Math.floor(Math.random() * charaterZ.length);
    password += charaterZ.substring(randomNum, randomNum + 1);
    console.log(randomNum, password);
  }
  myInput.value = password;
  copiedAlert.innerText = password + " copied";
}

function copyPassword() {
  myInput.select();
  myInput.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(myInput.value);
}
