
/* hardcoded login information to login if found */

const defaultUsername = "AdMiNiSStrAtor1032";
const defaultPassword = "password123";
let realUsername = null;
const realPassword = "password123";

console.log(`${defaultUsername}\n${defaultPassword}`);

/* Alert for cookies */

/* alert("Do you accept the cookies?");
alert("Are you sure you accept the cookies?");
alert("Are you really sure you accept the cookies?"); */


/* getting some information out of the HTML document and saving it in variables */

const loginButtons = document.querySelectorAll('.loginButtons');
const loginButton = document.getElementById("loginButton");
const timer = document.getElementById("timer");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("rememberCb");
const checkboxLabel = document.getElementById("checkboxLabel");
const stopTimer = document.getElementById("stopTimer");

let x = 0;
let timeOutId;

/* array of password messages */

const passwordMsgArray = ["Leave me alone.", "I said leave me alone.", "Are you serious?", "Get a live bro..", "FUCK OFF DUDE!"];

/* iterates through the array of Password messages that getting
displayed in the first password field */

const passwordMsg = () => {
    passwordInput.value = passwordMsgArray[x++];
    if (x === 5)
        x = 0;
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => passwordInput.value = null, 5000);
}

loginButton.addEventListener("click", passwordMsg);

/* function that resets all input fields and the checkbox aswell */

const resetAll = () => {
    usernameInput.value = null;
    if (passwordInput.value != passwordMsgArray[0] && passwordInput.value != passwordMsgArray[1] && passwordInput.value != passwordMsgArray[2] && passwordInput.value != passwordMsgArray[3] && passwordInput.value != passwordMsgArray[4])
        passwordInput.value = null;
    checkbox.checked = false;
}

/* starting point of the timer */

let timerStart = 6;

/* setting an Interval so the timer will count downwards */

let intervalId = setInterval(() => {
    timer.innerText = (parseInt(timer.innerText) - 1 + timerStart) % timerStart;
    if (parseInt(timer.innerText) === 0)
        resetAll();
}, 1000)

/* each doubleclick will increment the timer by 1 to a limit of 10 sec */

stopTimer.addEventListener("dblclick", () => {
    if (timerStart < 11)
        timerStart++;
})

const resetPasswordWin = document.getElementById("resetPasswordCon");
const resetButton = document.getElementById("resetButton");
const resetPasswordInput = document.getElementById("resetPasswordInput");
const forgotPasswordButton = document.getElementById("forgotPasswordButton");
const resetError = document.getElementById("resetError");
const contentHTML = document.getElementById("loginObj");
const congratsMsg = document.getElementById("congratsMsg");

/* If the user press on the forgot password button an alert will apear with
the message how to exit and the reset password window will appear right after
clicking ok */

forgotPasswordButton.addEventListener("click", () => {
    checkboxLabel.innerHTML = "login";
    resetPasswordWin.style.display = "flex";
    alert("IMPORTANT!\nIf you want to exit the reset password window, you need to type in exit!");
});

/* checks if the login data is valid and if so the user will be logged in */

const checkLogin = () => {
    if (usernameInput.value === defaultUsername && resetPasswordInput.value === defaultPassword && checkbox.checked === true ||
        realUsername && realPassword && usernameInput.value === realUsername && resetPasswordInput.value === realPassword && checkbox.checked === true)
    {
        contentHTML.style.display = "none";
        congratsMsg.style.display = "flex";
        console.log("Good job!\n");
    }
    else if (resetPasswordInput.value === "exit")
    {
        resetPasswordWin.style.display = "none";
        resetPasswordInput.value = null;
        resetError.style.visibility = "hidden";
        checkboxLabel.innerText = "Remember me";
    }
    else if (resetPasswordInput.value)
        displayError("Wrong password, please try again!");
    else
        displayError("You need to type in your current password to continue!");
}

/* if the user press the reset button in the reset button window the 
checkLogin function will be called */

resetButton.addEventListener("click", checkLogin);

/* displays an error message above the reset button */

const displayError = (msg) => {resetError.innerText = msg; resetError.style.visibility = "visible"; resetPasswordInput.value = null;}


/* all the variables from the register form */

const title = document.getElementById("registerTitle");
const registerTitleError = document.getElementById("registerTitleError");
const firstName = document.getElementById("registerFirstNameInp");
const lastName = document.getElementById("registerLastNameInp");
const registerNamesError = document.getElementById("registerNamesError");
const username = document.getElementById("registerUsername");
const registerUsernameError = document.getElementById("registerUsernameError");
const phoneNumber = document.getElementById("registerPhone");
const registerPhoneError = document.getElementById("registerNumberError");
const email = document.getElementById("registerEmail");
const registerEmailError = document.getElementById("registerEmailError");
const city = document.getElementById("registerCity");
const registerCityError = document.getElementById("registerCityError");
const sendRegisterButton = document.getElementById("sendRegisterButton");
const registeredWin = document.getElementById("registered");
const registerForm = document.getElementById("registerForm");
const registerButton = document.getElementById("registerButton");
const finalUsername = document.getElementById("finalUsername");
const finalPassword = document.getElementById("finalPassword");
const windowCrashedWin = document.getElementById("windowCrashedWin");
const alreadyRegistered = document.getElementById("alreadyRegistered");

/* opens up a register window and this getting crazy after 30 seconds, after
another 7 seconds it will display a crash message */

const randomUsernames = ["looser123", "Nofriends234", "searchingGF101", "segfault", "livingWithMum34"]
let crashedWinId;
let registerWinId;
let registerWinTimeId;
let isregistered = false;

registerButton.addEventListener("click", () => {
    if (isregistered === false)
    {
        registerForm.style.display = "flex"
        registerWinTimeId = setTimeout(() => {
            registerWinId = setInterval(() => {
                if (x % 2 === 0)
                {
                    email.style.rotate = "180deg";
                    username.value = randomUsernames[Math.floor(Math.random() * 5)];
                    lastName.style.fontWeight = "bolder";
                    firstName.style.visibility = "visible";
                    city.style.visibility = "hidden";
                }
                if (x % 4 === 0)
                {
                    firstName.style.visibility = "hidden";
                    city.style.visibility = "visible";
                }
                if (x % 2)
                {
                    email.style.rotate = "0deg";
                    title.value = Math.floor(Math.random() * 4 + 1);
                    lastName.style.fontWeight = "lighter";
                }
                x++;
                phoneNumber.value = phoneNumber.value.slice(0, -1);
                if (x === 4)
                    x = 0;
                crashedWinId = setTimeout(() => {
                    windowCrashedWin.style.display = "flex";
                }, 7000)
            }, 1000)
        }, 30000)
    }
    else
        alreadyRegistered.style.visibility = "visible"
});

/* clears the input-fields so the user can type every single thing in again */

const clearRegisterForm = () => {
    title.value = 1;
    firstName.value = null;
    lastName.value = null;
    username.value = null;
    phoneNumber.value = null;
    email.value = null;
    city.value = null;
}

/* resets the errormessages by hiding them */

const resetErrorMsg = () => {
    registerTitleError.style.visibility = "hidden";
    registerNamesError.style.visibility = "hidden";
    registerUsernameError.style.visibility = "hidden";
    registerPhoneError.style.visibility = "hidden";
    registerEmailError.style.visibility = "hidden";
    registerCityError.style.visibility = "hidden";
}

/* shows the errors and increases numOfErrors */

const showError = (errorType) => {
    errorType.style.visibility = "visible";
    numOfErrors++;
}

/* checks the conditions for the username and prints error if
ones not met */

const checkUsername = () => {
    if (!username.value)
        registerUsernameError.innerText = "Your need to type in your wished username!"
    else if (username.value.length < 10)
        registerUsernameError.innerText = "Your username must have atleast 10 characters!";
    else if (!/\d/.test(username.value))
        registerUsernameError.innerText = "Your username must have atleast 1 digit!";
    else if (!/[a-z]/.test(username.value))
        registerUsernameError.innerText = "Your username must have atleast one lowercase!";
    else if (!/[A-Z]/.test(username.value))
        registerUsernameError.innerText = "Your username must have atleast one uppercase!";
    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(username.value))
        registerUsernameError.innerText = "Your username must have atleast one special character!";
    else
        return;
    numOfErrors++;
    registerUsernameError.style.visibility = "visible";
}

/* checks if the city is vienna */

const checkCity = () => {
    if (!city.value)
        registerCityError.innerText = "You need to type in your city!";
    else if (city.value.toLowerCase() != "vienna")
        registerCityError.innerText = "Only users from vienna are allowed to register!";
    else
        return;
    numOfErrors++;
    registerCityError.style.visibility = "visible";
}

/* checks email input and displays error if not valid */

const checkEmail = () => {
    if (!email.value)
        registerEmailError.innerText = "You need to type in your email!";
    else if (!/@/.test(email.value))
        registerEmailError.innerText = "Your email isn't valid | @ missing!";
    else if (!/.com/.test(email.value))
        registerEmailError.innerText = "Your email must have an .com extension!";
    else
        return;
    numOfErrors++;
    registerEmailError.style.visibility = "visible";
}

/* checks for valid phone number */

const checkPhoneNumber = () => {
    if (!phoneNumber.value)
        registerPhoneError.innerText = "You need to type in your phone number";
    else if (phoneNumber.value.length < 10)
        registerPhoneError.innerText = "Your phone number is not valid, maybe to few digits?";
    else if (/6/.test(phoneNumber.value))
        registerPhoneError.innerText = "Your phone number must not contain the number 6!"
    else
        return;
    numOfErrors++;
    registerPhoneError.style.visibility  = "visible";
}

/* checks if the given Input is right and creates a user with password then */

let numOfErrors = 0;

const checkRegisterInput = () => {
    resetErrorMsg();
    numOfErrors = 0;
    if (title.value == 1)
        showError(registerTitleError);
    if (!firstName.value || !lastName.value)
        showError(registerNamesError);
    checkUsername();
    checkPhoneNumber();
    checkEmail();
    checkCity();
    if (numOfErrors === 0)
    {
        clearTimeout(registerWinTimeId);
        clearInterval(registerWinId);
        clearTimeout(crashedWinId);
        registerUser();
        finalUsername.innerText = realUsername;
        finalPassword.innerText = realPassword;
        registeredWin.style.display = "flex";
        registerForm.style.display = "none";
        setTimeout(() => registeredWin.style.display = "none", 10000);
        isregistered = true;
    }
    clearRegisterForm();
}

/* saves a Username and a Password for the user to login */

const registerUser = () => realUsername = firstName.value + lastName.value + (Math.floor(Math.random() * 100000000000) + 1000000000);

/* wait for register button to be clicked and calls checkingRegisterInput */

sendRegisterButton.addEventListener("click", checkRegisterInput);

window.onload = function() {
    clearRegisterForm();
    resetAll();
}