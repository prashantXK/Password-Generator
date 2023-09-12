// const inputSlider = document.querySelector("[data-rangeSlider]");
// const passwordLengthDisplay = document.querySelector("[data-lengthNumber]");
// const passwordDisplay = document.querySelector("[data-passwordDisplay]");
// const copyButton = document.querySelector("[data-copyButton]");
// const copyMessage = document.querySelector("[data-copyMessage]");
// const uppercaseCheckbox = document.querySelector("#uppercase");
// const lowercaseCheckbox = document.querySelector("#lowercase");
// const numberCheckbox = document.querySelector("#numbers");
// const specialcharCheckbox = document.querySelector("#specialchars");
// const strengthIndicator = document.querySelector("[data-strengthIndicator]");
// const generateButton = document.querySelector("#generateBtn");
// const allCheckbox = document.querySelectorAll("input[type=checkbox]");
// const specialcharacters = "~?!@#$%^&*(){}[]=<>/,.";

// //intially
// let password = "";
// let passwordLength = 10;
// let checkCount = 0;
// handleSlider();
// //set strength circle color to grey
// //function to handle  range slider
// //set password length (reflect password length to ui)
// function handleSlider() {
//   inputSlider.value = passwordLength;
//   passwordLengthDisplay.innerText = passwordLength;
// }

// //function to handle strength indicator
// function setIndicator(color) {
//   strengthIndicator.style.backgroundColor = color;
//   //shadow
// }

// //function to get random integer
// function randomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// //function to generate random number
// function generateRandomNumber() {
//   return randomInteger(0, 9);
// }

// //fucntion to generate lowercase
// function generateLowercase() {
//   return String.fromCharCode(randomInteger(97, 123));
// }
// //function to generate uppercase
// function generateUppercase() {
//   return String.fromCharCode(randomInteger(65, 91));
// }
// // function to special characters
// function generateSpecialChar() {
//   const randomNum = randomInteger(0, specialcharacters.length);
//   return specialcharacters.charAt(randomNum);
// }

// //function to calculate password strength
// function calcPasswordStrength() {
//   let hasUpper = false;
//   let hasLower = false;
//   let hasNumber = false;
//   let hasChar = false;
//   if (uppercaseCheckbox.checked) hasUpper = true;
//   if (lowercaseCheckbox.checked) hasLower = true;
//   if (numberCheckbox.checked) hasNumber = true;
//   if (specialcharCheckbox.checked) hasChar = true;

//   if (hasUpper && hasChar && (hasNumber || hasChar) && passwordLength >= 8) {
//     setIndicator("#0f0");
//   } else if (
//     (hasLower || hasUpper) &&
//     (hasNumber || hasChar) &&
//     passwordLength >= 6
//   ) {
//     setIndicator("#ff0");
//   } else {
//     setIndicator("#f00");
//   }
// }

// //function to copy password

// async function copyPassword() {
//   try {
//     await navigator.clipboard.writeText(passwordDisplay.value);
//     copyMessage.innerText = "copied";
//   } catch(e) {
//     copyMessage.innerText = "failed";
//   }
//   //to make copy message span visible
//   copyMessage.classList.add("active");

//   setTimeout(() => {
//     copyMessage.classList.remove("active");
//   }, 2000);
// }

// //fisher yates method (shuufle)
// function shufflePassword(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   let str = "";
//   array.forEach((el) => (str += el));
//   return str;
// }

// //function for tracking checkboxes

// function handleCheckboxChange() {
//   checkCount = 0;
//   allCheckbox.forEach((checkbox) => {
//     if(checkbox.checked) 
//     checkCount++;
//   });

//   //special conditon (corner case)
//   if (passwordLength < checkCount) {
//     passwordLength = checkCount;
//     handleSlider();
//   }
// }
// allCheckbox.forEach((checkbox) => {
//   checkbox.addEventListener("change", handleCheckboxChange());
// });

// //eventlistener for range slider avlue;
// inputSlider.addEventListener("input", (e) => {
//   passwordLength = e.target.value;
//   handleSlider();
// });

// //eventlistener for copy button
// copyButton.addEventListener("click", () => {
//     if (passwordDisplay.value) 
//     copyPassword();
//   });
  

// //eventlistener for generate password button

// generateButton.addEventListener("click", () => {
//   //none of checkbox are selected
//   if (checkCount == 0) 
//   return;

//   if (passwordLength < checkCount) {
//     passwordLength = checkCount;
//     handleSlider();
//   }

// console.log("starting the journey")
//   //generating random password

//   //remove old password
//   password = "";
//   //   if (uppercaseCheckbox.checked) {
//   //     password += generateUppercase();
//   //   }
//   //   if (lowercaseCheckbox.checked) {
//   //     password += generatelowercase();
//   //   }
//   //   if (numberCheckbox.checked) {
//   //     password += generateRandomNumber();
//   //   }
//   //   if (specialcharCheckbox.checked) {
//   //     password += generateSpecialChar();
//   //   }

//   let funcArray = [];
//   if (uppercaseCheckbox.checked) 
//   funcArray.push(generateUppercase);

//   if (lowercaseCheckbox.checked) {
//     funcArray.push(generateLowercase);
//   }

//   if (numberCheckbox.checked) {
//     funcArray.push(generateRandomNumber);
//   }

//   if (specialcharCheckbox.checked) {
//     funcArray.push(generateSpecialChar);
//   }

//   for (let i = 0; i < funcArray.length; i++) {
//     password += funcArray[i]();
//   }
//   console.log("compulsory additon done");

//   for (let i = 0; i<password.length-funcArray.length; i++) {
//     let randomIndex = generateRandomNumber(0, funcArray.length);
//     password += funcArray[randomIndex]();
//   }
//   console.log("remaining addition done")

//   //shuffle tha password
//   password = shufflePassword(Array.from(password));
//   console.log("shuffling done");

//   //password display on UI
//   passwordDisplay.value = password;
//   console.log("ui additon done")

//   //calculate strength
//   calcPasswordStrength();

// });

const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


//initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//ste strength circle color to grey
setIndicator("#ccc");


//set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {  
       return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase() {  
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        //random J, find out using random function
        const j = Math.floor(Math.random() * (i + 1));
        //swap number at i index and j index
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    //special condition
    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})


inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})


copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyContent();
})

generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected

    if(checkCount == 0) 
        return;

    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the jouney to find new password
    console.log("Starting the Journey");
    //remove old password
    password = "";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();
    }
    console.log("COmpulsory adddition done");

    //remaining adddition
    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randIndex = getRndInteger(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex]();
    }
    console.log("Remaining adddition done");
    //shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("Shuffling done");
    //show in UI
    passwordDisplay.value = password;
    console.log("UI adddition done");
    //calculate strength
    calcStrength();
});