function getRandomPermutation() {
    return [1, 2, 3].sort(() => Math.random() - 0.5).join("")
}
const permutation = getRandomPermutation();
console.log(permutation); // Выведет случайную перестановку: например, "132"

const block = document.querySelector('.bgc-paralax');
blockSecond = document.querySelector(".bgc-paralax-second")
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    const moveX = 100 - x
    const moveY = 100 - y

    block.style.backgroundPosition = `${moveX}% ${moveY}%`
    blockSecond.style.backgroundPosition = `${moveX}% ${moveY}%`
});

const fixedMenu = document.querySelector(".menu")
const startupLogo = document.querySelector("#startup-logo")
window.addEventListener('scroll', () => {
    if (window.scrollY > 750) {
        if(screen.width >= 768){
            fixedMenu.classList.add('scrolled')
        }else{

        }
        startupLogo.src = "img/StartupRed.png"
    } else {
        fixedMenu.classList.remove('scrolled')
        startupLogo.src = "img/Startup.png"
    }
})

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
let clickCount = 0
let clickTimer

document.querySelector("#hacksite").addEventListener('click', function (e) {
    clickCount++

    if (clickCount === 3) {
        console.log('triple click')
        document.querySelectorAll(".name").forEach(el => {
            el.textContent = "YOU HACK SITE!!!!!"
        })
        clickCount = 0
        clearTimeout(clickTimer)
    } else {
        clearTimeout(clickTimer)
        clickTimer = setTimeout(() => {
            clickCount = 0
        }, 500)
    }
});

let activeElement = null
let offsetX = 0,
    offsetY = 0,
    startX = 0,
    startY = 0


    const dropzone = document.querySelector("#dropzone");

    document.querySelectorAll(".square").forEach(element => {
        element.addEventListener("mousedown", (event) => {
            activeElement = event.target;
            offsetX = event.clientX - activeElement.offsetLeft;
            offsetY = event.clientY - activeElement.offsetTop;
            startX = activeElement.offsetLeft;
            startY = activeElement.offsetTop;
        });
    });
    
    document.addEventListener("mousemove", (event) => {
        if (!activeElement) return;
        activeElement.style.left = event.clientX - offsetX + "px";
        activeElement.style.top = event.clientY - offsetY + "px";
    });
    
    document.addEventListener("mouseup", () => {
        if (activeElement) {
            dropzoneZone = dropzone.getBoundingClientRect();
            console.log(activeElement);
            const activeRect = activeElement.getBoundingClientRect();
            console.log(activeRect.x, dropzoneZone.x, activeRect.y, dropzoneZone.y);
            if (
                activeRect.x >= dropzoneZone.x &&
                activeRect.x <= dropzoneZone.x + dropzoneZone.width &&
                activeRect.y >= dropzoneZone.y &&
                activeRect.y <= dropzoneZone.y + dropzoneZone.height
            ) {
                console.log("Элемент в зоне");
                const value = activeElement.getAttribute("value");
                let itog
                if(!itog){
                    let itog = value
                }else{
                    itog = itog + value
                }
                console.log("Значение value квадратика: ", value);
                console.log(itog)
                dropzone.appendChild(activeElement);
                activeElement.style.position = "static";
            } else {
                activeElement.style.left = startX + "px";
                activeElement.style.top = startY + "px";
            }
            activeElement = null;
        }
    });
    function checkOrder() {
        const squares = document.querySelectorAll('.square');
        let order = [];
        squares.forEach(square => {
            const value = square.getAttribute('value');
            order.push(value);
        });
        let itog = order.join('')
        console.log(itog)
    }
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
    if(checkOrder() === Number(permutation)){
        alert("віів")
    }else{
        alert("Капча невірна!")
    }
})
let user = localStorage.getItem("username")
console.log(user)
if (user) {
    welcometext.textContent = `Welcome ${user}`
}
const typeworks = document.querySelector("#typeworks"),
    images = document.querySelectorAll(".works img")

document.addEventListener("DOMContentLoaded", function () {
    const savedValue = localStorage.getItem("selectedValue");
    if (savedValue) {
        const inputToCheck = document.querySelector(`input[name="typeworks"][value="${savedValue}"]`);
        if (inputToCheck) {
            inputToCheck.checked = true;
            filterImages(savedValue);
        }
    }
});

function filterImages(selectedValue) {
    images.forEach(img => {
        const categories = img.getAttribute("data-category").split(",");
        if (selectedValue === "all" || categories.includes(selectedValue)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

typeworks.addEventListener("change", function () {
    const selectedValue = document.querySelector('input[name="typeworks"]:checked').value;
    localStorage.setItem("selectedValue", selectedValue);
    filterImages(selectedValue);
});
const readmorefirst = document.querySelector("#read-more-first"),
    morefirst = document.querySelector("#more-first")
let isLongFirst = false
readmorefirst.addEventListener("click", () => {
    if (!isLongFirst) {
        morefirst.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam "
        readmorefirst.textContent = "Read shorter"
        isLongFirst = true
    } else {
        morefirst.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam "
        readmorefirst.textContent = "Read more"
        isLongFirst = false
    }
})
const readmoresecond = document.querySelector("#read-more-second"),
    moresecond = document.querySelector("#more-second")
let isLongsecond = false
readmoresecond.addEventListener("click", () => {
    if (!isLongsecond) {
        moresecond.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam "
        readmoresecond.textContent = "Read shorter"
        isLongsecond = true
    } else {
        moresecond.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam "
        readmoresecond.textContent = "Read more"
        isLongsecond = false
    }
})
const form = document.getElementById("contactForm"),
    formBtn = document.querySelector(".btn-form"),
    submitBtn = document.querySelector("#submit-btn"),
    formPopup = document.querySelector(".get-in-touch-popup")
redact = document.querySelector("#redact-btn")
document.addEventListener("DOMContentLoaded", function () {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    const savedSubject = localStorage.getItem("subject");
    const savedCompany = localStorage.getItem("company");

    if (savedName) form.elements["name"].value = savedName;
    if (savedEmail) form.elements["email"].value = savedEmail;
    if (savedSubject) form.elements["subject"].value = savedSubject;
    if (savedCompany) form.elements["company"].value = savedCompany;
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};
    let hasError = false;

    formData.forEach((value, key) => {
        data[key] = value.trim();
    });

    if (data.name !== "") {
        document.querySelector("#touch-name").textContent = data.name;
    } else {
        alert("Заповніть ім'я!");
        hasError = true;
    }

    if (data.email !== "") {
        document.querySelector("#touch-email").textContent = data.email;
    } else {
        alert("Заповніть email!");
        hasError = true;
    }

    if (data.subject !== "") {
        document.querySelector("#touch-subject").textContent = data.subject;
    } else {
        alert("Заповніть тему!");
        hasError = true;
    }

    if (data.company !== "") {
        document.querySelector("#touch-company-name").textContent = data.company;
    } else {
        alert("Заповніть назву компанії!");
        hasError = true;
    }

    if (hasError) return;

    // Показываем попап
    bgc.style.right = "0";
    formPopup.style.left = "50%";

    // Обработчик подтверждения отправки (сохраняем данные)
    const onSubmit = function () {
        bgc.style.right = "-100%";
        formPopup.style.left = "-100%";
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        localStorage.setItem("subject", data.subject);
        localStorage.setItem("company", data.company);

        // Удаляем обработчик после срабатывания, чтобы не дублировался
        submitBtn.removeEventListener("click", onSubmit);
    };

    submitBtn.addEventListener("click", onSubmit);

    // Обработчик для кнопки "Редактировать"
    redact.addEventListener("click", function () {
        bgc.style.right = "-100%";
        formPopup.style.left = "-100%";
    }, {
        once: true
    });

    // Закрытие по клику на фон
    bgc.addEventListener("click", function () {
        bgc.style.right = "-100%";
        formPopup.style.left = "-100%";
    }, {
        once: true
    });
});
// let nameform = localStorage.getItem("name"),
//     email = localStorage.getItem("email"),
//     subject = localStorage.getItem("subject"),
//     company = localStorage.getItem("company")
//     if(nameform && email && subject)
// function closeMobileBurger(element){
//     document.querySelector(element).addEventListener("click",function (){
//         bgcMobile.style.right = "-100%"
//         menu.style.left = "-100%"
//     })
// }
// closeMobileBurger("#services")
const quoteButtons = [
    document.querySelector("#first-quote"),
    document.querySelector("#second-quote"),
    document.querySelector("#thirst-quote")
];
const quote = document.querySelector(".comment-text");
const quoteName = document.querySelector(".comment-name"),
    comment = document.querySelector(".comment")

const quotesData = [{
        text: "Hvaing placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum",
        name: "John Doe, Google Inc"
    },
    {
        text: "Let me focus, can't be zoning out, he pullin' up now He double parked, he ain't getting out, he in that push to start",
        name: "King Von, Oblock"
    },
    {
        text: "приятель проводит меня до тарелки это слишком далеко я поменял местоназначения включи свое местоположения",
        name: "Lazer dim 700"
    }
];

let currentIndex = 0;
let intervalId;

function updateQuote(index) {
    quoteButtons.forEach((btn, i) => {
        btn.style.backgroundColor = i === index ? "#c0301c" : "#ddd"
    })

    quote.textContent = quotesData[index].text
    quoteName.textContent = quotesData[index].name
    currentIndex = index;
}

function startInterval() {
    intervalId = setInterval(() => {
        let nextIndex = (currentIndex + 1) % quotesData.length
        updateQuote(nextIndex)
    }, 3000)
}

function stopInterval() {
    clearInterval(intervalId);
}
// Обработчики кликов
quoteButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        updateQuote(i)
    })

    comment.addEventListener("mouseenter", stopInterval)
    comment.addEventListener("mouseleave", startInterval)
})
updateQuote(0);
startInterval();
const khalil = document.querySelector("#first-developer"),
    miah = document.querySelector("#second-developer"),
    shramim = document.querySelector("#thirth-developer"),
    john = document.querySelector("#fourth-developer"),
    leftBtn = document.querySelector(".left-button"),
    rightBtn = document.querySelector(".right-button")
let firstDeveloper = khalil,
    secondDeveloper = miah,
    thirthDeveloper = shramim,
    fourthDeveloper = john

if (screen.width <= 1600) {
    fourthDeveloper.style.display = "none"
} else {
    fourthDeveloper.style.display = "block"
}
if (screen.width <= 1200) {
    thirthDeveloper.style.display = "none"
} else {
    thirthDeveloper.style.display = "block"
}
if (screen.width <= 768) {
    secondDeveloper.style.display = "none"
} else {
    secondDeveloper.style.display = "block"
}
window.addEventListener("resize", () => {
})
leftBtn.addEventListener("click", () => {
    firstDeveloper = fourthDeveloper
    secondDeveloper = firstDeveloper
    thirthDeveloper = secondDeveloper
    fourthDeveloper = thirthDeveloper
})
const elements = document.querySelectorAll('.hiden-element');

function showElementsOnScroll() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showElementsOnScroll);
window.addEventListener('load', showElementsOnScroll);

let offsetslider = 0;
const slider = document.querySelector(".workers")

leftBtn.addEventListener("click", function(){
    offsetslider += 260
    slider.style.left = offsetslider +"px"
})
const squares = document.querySelectorAll('.square');

// Извлекаем значение атрибута "value" у каждого элемент