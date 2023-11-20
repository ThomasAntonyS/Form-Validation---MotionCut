
const user = document.getElementById('username')
const password = document.getElementById('password')
const cfm_password = document.getElementById('confirm-password')
const registerBtn = document.getElementById('Register')

registerBtn.addEventListener('click',()=>{
    if (password.value==cfm_password.value) {
        window.location.href = "login.html"
        alert("Registration Sucessfull...")
    }
    else {
        alert("Password Doesn't Match")
    }
})
