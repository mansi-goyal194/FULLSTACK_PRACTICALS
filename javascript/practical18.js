var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var msg = document.querySelector("small");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
    if (usernameValue === '') {
        showError(username, "Username can not be blank");
    } else if (!isUsernameValid(usernameValue)) {
        showError(username, "Username is not valid");
    } else {
        showSuccess(username);
    }
    const emailValue = email.value.trim();
    if (emailValue === '') {
        showError(email, "Email can not be blank");
    } else if (!isEmailValid(emailValue)) {
        showError(email, "Email id is not valid");
    } else {
        showSuccess(email);
    }
    const password1Value = password1.value.trim();
    if (password1Value === '') {
        showError(password1, "Password can not be blank");
    } else {
        showSuccess(password1);
    }
    const password2Value = password2.value.trim();
    if (password2Value === '') {
        showError(password2, "Re enter your password");
    } else if (password2Value != password1Value) {
        showError(password2, "Passwords does not match");
    } else {
        showSuccess(password2);
    }
}

function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = "form-data error";
    const small = formControl.querySelector("small")
    small.innerHTML = msg

}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = "form-data success";
}

function isEmailValid(email) {
    return /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isUsernameValid(username) {
    return /^([a-z0-9]+)$/.test(username);
}