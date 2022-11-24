const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let password_length = 8

//grab the generate button and add a click event to generate the passwords
const generate_btn = document.getElementById("generatePassword")

generate_btn.addEventListener("click", () => {
    getGeneratedPass();
})

//create a function that returns a random password from characters
const generate_password = () => {
    let password = ''

    for (let i = 0; i < password_length; i++) {
        const random_Pass = Math.floor(Math.random() * characters.length);
        password += characters[random_Pass]
    }
    return password;
}

//grab all the password boxes in which generated passwords are being displayed
const pass1_box = document.getElementById('passBox1')
const pass2_box = document.getElementById('passBox2')
const pass3_box = document.getElementById('passBox3')
const pass4_box = document.getElementById('passBox4')

//create a function that will display the generated passwords in the password boxes
const getGeneratedPass = () => {
    pass1_box.innerHTML = `<input type="text" value="${generate_password()}" id='1'>`

    pass2_box.innerHTML = `<input type="text" value="${generate_password()}" id='2'>`

    pass3_box.innerHTML = `<input type="text" value="${generate_password()}" id='3'>`

    pass4_box.innerHTML = `<input type="text" value="${generate_password()}" id='4'>`

    changeColorPass();
}

//change the color of generated passwords' text
const changeColorPass = () => {
    let allPasswords = document.getElementsByClassName('passBox')
    for (let j = 0; j < allPasswords.length; j++) {
        allPasswords[j].style.color = "var(--clr-dark-green)";
    }
}

// Creates a function that copies selected password text to clipboard by clicking on it
function copyToClipboard(id) {
    const copyText = document.getElementById(id);
    navigator.clipboard.writeText(copyText.value).then(() => {
        // Alert the user that the action took place. {Nobody likes hidden stuff being done under the hood!}
        alert("Copied to clipboard!");
    });
}

// grab the slider and sliderNumber elements
const slider = document.getElementById("slider");
let sliderNumber = document.getElementById("sliderNumber");

//create an event listener to set the desired length of password value
slider.addEventListener('input', () => {
    //set the slider
    sliderNumber.textContent = slider.value
    //assign the desired length of the password
    password_length = slider.value
})