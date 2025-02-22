const burger = document.querySelector(".burger"),
    bgcMobile = document.querySelector(".bgc-blur-for-mobile"),
    menu = document.querySelector(".menu-panel"),
    cancel = document.querySelector(".cancel")

burger.addEventListener("click", function () {
    bgcMobile.style.right = "0"
    menu.style.left = "0"
})
cancel.addEventListener("click", function () {
    bgcMobile.style.right = "-100%"
    menu.style.left = "-100%"
})