let inputTouched = {
    email: false,
    password: false
};

const inputEmail = document.getElementById("Login");
const inputPassword = document.getElementById("Password");
const warningEmail = document.getElementById("warningEmail");
const warningPassword = document.getElementById("warningPassword");

const inputOnBlur = (input) => {
    if (input.name === "email" && inputTouched.email) {
        if (!validateEmail(inputEmail.value) && !validatePhone(inputEmail.value)) {
            warningEmail.style.display = "block";
            inputEmail.style.borderBottom = '2px solid #e87c03';
        } else {
            warningEmail.style.display = "none";
            inputEmail.style.borderBottom = "1px solid #ccc"; // Reset border
        }
    }
    
    if (input.name === "password" && inputTouched.password) {
        if (!(inputPassword.value.length >= 4 && inputPassword.value.length <= 60)) {
            warningPassword.style.display = "block";
            inputPassword.style.borderBottom = '2px solid #e87c03';
        } else {
            warningPassword.style.display = "none";
            inputPassword.style.borderBottom = "1px solid #ccc"; // Reset border
        }
    }
};

const inputOnFocus = (input) => {
    inputTouched[input.name] = true;
};

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validatePhone = email => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(email).toLowerCase());
};

document.querySelector('form.login').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Perform validation
    inputTouched.email = true;
    inputTouched.password = true;
    
    inputOnBlur(inputEmail);
    inputOnBlur(inputPassword);
    
    // Check if there are any validation errors
    if (warningEmail.style.display !== "none" || warningPassword.style.display !== "none") {
        return; // Stop submission if there are validation errors
    }
    
    // Simulate login and redirect to the success page
    setTimeout(() => {
        window.location.href = "login_successful.html";
    }, 500); // Delay for user feedback or animation, optional
});
