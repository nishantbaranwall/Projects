// 1. Get DOM elements
// 2. Set up event listeners (slider, button)
// 3. Build character set based on options
// 4. Generate password
// 5. Show password in input box

const passbox = document.querySelector('.passbox');
const length = document.querySelector('.lengthValue');
const range = document.querySelector('.range');

const lowerEl = document.querySelector('.lowercase');
const upperEl = document.querySelector('.uppercase');
const numEl = document.querySelector('.numbers');
const symbolsEl = document.querySelector('.symbols');

const button = document.querySelector('.generateBtn');

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

range.addEventListener('input', () => {
    length.textContent = range.value;
});

button.addEventListener('click', () => {
    let charSet = "";
    if (lowerEl.checked) charSet += lower;
    if (upperEl.checked) charSet += upper;
    if (numEl.checked) charSet += num;
    if (symbolsEl.checked) charSet += symbols;  

    if(charSet == ""){
        passbox.value = "Select at least 1 option!";
        return;
    }
    let password = "";
    for(let i = 0; i<range.value; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    passbox.value = password;
})






