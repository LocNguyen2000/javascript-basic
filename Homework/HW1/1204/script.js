const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmpassword = document.querySelector('#confirm-password');
const form = document.querySelector('#registerForm');


function checkUsername() {
    let check = false;
    const usernameValue = username.value.trim();

    if (!isRequired(usernameValue)) {
        showError(username, 'Username is required.');
    } else {
        showSuccess(username);
        check = true;
    }
    return check;
}

function checkPassword() {

    let check = false;

    const passwordValue = password.value.trim();

    if (!isRequired(passwordValue)) {
        showError(password, 'Password is required.');
    } else {
        showSuccess(password);
        check = true;
    }

    return check;
}

function checkConfirmPassword() {
    let check = false;
    const confirmPasswordValue = confirmpassword.value.trim();
    const passwordValue = password.value.trim();

    if (!isRequired(confirmPasswordValue)) {
        showError(confirmpassword, 'Password is required');
    } else if (passwordValue !== confirmPasswordValue) {
        showError(confirmpassword, 'Password and Confirm Password do not match.');
    } else {
        showSuccess(confirmpassword);
        check = true;
    }

    return check;
}

function isRequired(value) {
    if (value == '') {
        return false;
    }
    return true;
}

function showError(input, message) {

    const formRegister = input.parentElement;

    formRegister.classList.remove('success');
    formRegister.classList.add('error');

    const error = formRegister.querySelector('small');
    error.textContent = message;
}

function showSuccess(input) {

    const formRegister = input.parentElement;

    formRegister.classList.remove('error');
    formRegister.classList.add('success');

    const error = formRegister.querySelector('small');
    error.textContent = '';
}

const titleShow = document.querySelector('h3')
form.addEventListener('submit', function (e) {

    e.preventDefault();

    let isUsernamecheck = checkUsername(),
        isPasswordcheck = checkPassword(),
        isConfirmPasswordcheck = checkConfirmPassword();

    let checkForm = isUsernamecheck && isPasswordcheck && isConfirmPasswordcheck;
    const titleShow = document.querySelector('h3')
    if (checkForm) {
        titleShow.innerText = "You have registered successfully.";
    }
});

form.addEventListener('input', function (e) {
    titleShow.innerText = "";
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
});
