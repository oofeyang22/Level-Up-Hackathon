
const bell = document.getElementById("notification-bell");
const davii = document.querySelector(".name");

const notificationBar = document.querySelector(".notification-bar");
const popUp = document.querySelector(".popup");

bell.addEventListener("click", () => {
    notificationBar.classList.toggle("show-text");
});

davii.addEventListener("click", () => {
    popUp.classList.toggle("show-text");
});

const controller= document.querySelector(".controller");
const dropBtn= document.querySelector(".dropbtn")
const dropdown= document.querySelector(".open-icon")
const open= document.querySelector(".drop-icon")
dropBtn.addEventListener("click", (e) => {
    const parent= e.currentTarget.parentElement.parentElement.children[1];
    console.log(parent);
    parent.classList.toggle("show-text");
    dropdown.style.display= "none"
    open.style.display="block"
});

const steps = document.querySelectorAll(".step");

steps.forEach(function (step) {
  const ellipse = step.querySelector(".ellipse");
  // console.log(btn);

  ellipse.addEventListener("click", function () {
    // console.log(question);

    steps.forEach(function (item) {
      if (item !== step) {
        item.classList.remove("active");
        item.classList.remove("color")
      }
    });

    step.classList.toggle("active");
    step.classList.toggle("color")
  });
});

const ellipses= document.querySelectorAll(".ellipse");

ellipses.forEach(function (ellipse) {
    ellipse.addEventListener("click", () => {
        ellipse.src= "CircleTickMajor.png";
    })
})
let changer= document.querySelector(".changer")
let indicator= document.querySelector(".indicator")
let progressbar= document.querySelector(".progressbar")
let currentStep= 1;


let first= document.querySelector("#first");

let second = document.querySelector("#second");

let third= document.querySelector("#third");

let fourth = document.querySelector("#fourth");
let fifth= document.querySelector("#fifth");

first.addEventListener("click", () => {
  indicator.style.width= `20%`;
  changer.innerHTML= "1"
})

second.addEventListener("click", () => {
  indicator.style.width= `40%`;
  changer.innerHTML= "2"
})

third.addEventListener("click", () => {
  indicator.style.width= `60%`;
  changer.innerHTML= "3"
})

fourth.addEventListener("click", () => {
  indicator.style.width= `80%`;
  changer.innerHTML= "4"
})
fifth.addEventListener("click", () => {
  indicator.style.width= `100%`;
  changer.innerHTML= "5"
})
