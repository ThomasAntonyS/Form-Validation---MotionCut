
const user = document.getElementById('username')
const password = document.getElementById('password')
const cfm_password = document.getElementById('confirm-password')
const registerBtn = document.getElementById('Register')

const loginUser = document.getElementById('login-username')
const loginPassword = document.getElementById('login-password')
const loginBtn = document.getElementById('login-button')

registerBtn.addEventListener('click',()=>{
    if (password.value==cfm_password.value) {
        window.location.href = "login.html"
        alert("Registration Sucessfull...")
    }
    else {
        alert("Password Doesn't Match")
    }
})

loginBtn.addEventListener('click',()=>{
    if(loginUser.value==user.value && loginPassword.value==password.value){
        alert("Login Sucessful.")
        console.log("clicked")
    }
    else{
        alert("Username or Password doesn't match")
    }
})