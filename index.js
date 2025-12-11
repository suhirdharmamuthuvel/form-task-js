let form = document.querySelector("form")
const ep = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", ifEmpty)
let userName = document.getElementById("userName")
let email = document.getElementById("Email")
let password = document.getElementById("PassWord")
let retype = document.getElementById("Retype")

function ifEmpty() {
    let ip = document.querySelectorAll("input")
    const formGrp = ip.parentElement

    ip.forEach(element => {
        let parent = element.parentElement;
        let para = parent.querySelector("p")
        if (element.value == '') {
            parent.classList.add("required")
            parent.classList.remove("success")
        } else {
            parent.classList.add("success")
            parent.classList.remove("required")
        }

        if (element.classList.contains("Email") && element.value !== "" && !ep.test(element.value)) {
            parent.classList.remove("success")
            parent.classList.add("required")
            para.innerHTML = 'Please enter a valid email address.';
        }

        if (element.classList.contains("Retype") && element.value !== "") {
            if (password.value !== retype.value) {
                parent.classList.remove("success")
                parent.classList.add("required")
                para.innerHTML = 'Does not match the password!!!';
            }
        }
    })
}