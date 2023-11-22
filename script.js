
const Fullname = document.getElementById('full-name')
const user = document.getElementById('username')
const password = document.getElementById('password')
const cfm_password = document.getElementById('confirm-password')
const email = document.getElementById('email-id')
const registerBtn = document.getElementById('Register')

const infoBox = document.getElementById('display-info')
const Fname = document.getElementById('disp-Fname')
const Uname = document.getElementById('disp-Uname')
const Email = document.getElementById('disp-Email')
const pass = document.getElementById('disp-Passw')
const doneBtn = document.getElementById('Done')
const container = document.getElementById('container')

registerBtn.addEventListener('click',()=>{
    if (password.value=="" || password.value!=cfm_password.value) {
       alert("Please fill the correct details")
    }
    alert('Registration Sucessfull')
})

