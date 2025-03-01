function getRandomPermutation() {
    return [1, 2, 3].sort(() => Math.random() - 0.5).join("")
}

function display(element) {
    element.style.display = "block"
}
const burger = document.querySelector(".burger"),
    bgcMobile = document.querySelector(".bgc-blur-for-mobile"),
    menu = document.querySelector(".menu-panel"),
    cancel = document.querySelector(".cancel"),
    login = document.querySelector("#get-started-login"),
    bgc = document.querySelector(".bgc-blur")

burger.addEventListener("click", function () {
    bgcMobile.style.right = "0"
    menu.style.left = "0"
})
cancel.addEventListener("click", function () {
    bgcMobile.style.right = "-100%"
    menu.style.left = "-100%"
})
let activeElement = null
let offsetX = 0,
    offsetY = 0,
    startX = 0,
    startY = 0


const dropzone = document.querySelector("#dropzone")
document.querySelectorAll(".square").forEach(element => {
    element.addEventListener("mousedown", (event) => {
        activeElement = event.target
        offsetX = event.clientX - activeElement.offsetLeft
        offsetY = event.clientY - activeElement.offsetTop
        startX = activeElement.offsetLeft
        startY = activeElement.offsetTop
    })
})

document.addEventListener("mousemove", (event) => {
    if (!activeElement) return
    activeElement.style.left = event.clientX - offsetX + "px"
    activeElement.style.top = event.clientY - offsetY + "px"
})

document.addEventListener("mouseup", () => {
    if (activeElement) {
        dropzoneZone = dropzone.getBoundingClientRect()
        console.log(activeElement)
        const activeRect = activeElement.getBoundingClientRect()
        console.log(activeRect.x, dropzoneZone.x, activeRect.y, dropzoneZone.y)
        if (activeRect.x >= dropzoneZone.x && activeRect.x <= dropzoneZone.x + dropzoneZone.width && activeRect.y >= dropzoneZone.y && activeRect.y <= dropzoneZone.y + dropzoneZone.height) {
            console.log("r")
            dropzone.appendChild(activeElement)
            activeElement.style.position = "static"
        } else {
            activeElement.style.left = startX + "px"
            activeElement.style.top = startY + "px"
        }
        activeElement = null
    }
})
const loginMenu = document.querySelector(".login-menu"),
    cancelLogin = document.querySelector(".cancel-login")
login.addEventListener("click", function () {
    bgc.style.right = "0"
    loginMenu.style.left = "50%"
    bgc.addEventListener("click", function () {
        bgc.style.right = "-100%"
        loginMenu.style.left = "-100%"
    })
    cancelLogin.addEventListener("click", function () {
        bgc.style.right = "-100%"
        loginMenu.style.left = "-100%"
    })
})
console.log(getRandomPermutation())
const captchaSubmit = document.querySelector("#captcha-submit"),
    num = document.querySelector("#number"),
    regNum = /(^(\+38)\d{10})|((^0)\d{9})/gi,
    loginEnter = document.querySelector("#login"),
    welcometext = document.querySelector("#welcome")


captchaSubmit.addEventListener("click", () => {
    const phoneNumber = num.value
    const logined = loginEnter.value
    if (regNum.test(phoneNumber)) {
        if (logined !== "") {
            welcometext.textContent = `Welcome ${logined}`
            bgc.style.right = "-100%"
            loginMenu.style.left = "-100%"
            localStorage.setItem("username", `${logined}`)
            console.log(user)
        } else {
            alert("Логін не може бути пустим!")
        }
    } else {
        if (phoneNumber == "") {
            alert("Введіть номер!")
        } else {
            alert("Невалідний номер!")
        }
    }
})
let user = localStorage.getItem("username")
console.log(user)
if (user) {
    welcometext.textContent = `Welcome ${user}`
}
const typeworks = document.querySelector("#typeworks"),
    images = document.querySelectorAll(".works img")

typeworks.addEventListener("change", function () {
    const selectedValue = document.querySelector('input[name="typeworks"]:checked').value
    localStorage.setItem("selectedValue", selectedValue)
    console.log("ds")
    images.forEach(img => {
        const categories = img.getAttribute("data-category").split(",")
        if (selectedValue === "all" || categories.includes(selectedValue)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    })
})
const readmorefirst = document.querySelector("#read-more-first"),
    morefirst = document.querySelector("#more-first")
let isLongFirst = false
readmorefirst.addEventListener("click", () =>{
    if(!isLongFirst){
        morefirst.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam "
        readmorefirst.textContent = "Read shorter"
        isLongFirst = true
    }else{
        morefirst.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam "
        readmorefirst.textContent = "Read more"
        isLongFirst = false
    }
})
const readmoresecond = document.querySelector("#read-more-second"),
    moresecond = document.querySelector("#more-second")
let isLongsecond = false
readmoresecond.addEventListener("click", () =>{
    if(!isLongsecond){
        moresecond.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam "
        readmoresecond.textContent = "Read shorter"
        isLongsecond = true
    }else{
        moresecond.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam "
        readmoresecond.textContent = "Read more"
        isLongsecond = false
    }
})