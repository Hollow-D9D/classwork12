let n = 3;
let counter = 300;
const slideArr = document.getElementsByTagName("img");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");


const changeSlide = () => {
    counter++;
    let prev = (counter - 1) % 3;
    slideArr[counter % 3].classList.add("slide");
    slideArr[counter % 3].classList.remove("hidden-slide");
    slideArr[prev].classList.add("hidden-slide");
    slideArr[prev].classList.remove("slide");
}

// console.log(slideArr[counter % 3].classList);
setInterval(changeSlide, 3000)
btnRight.addEventListener("click", changeSlide);
btnLeft.addEventListener("click", () => {
    counter--;
    let next = (counter + 1) % n;
    slideArr[counter % n].classList.add("slide");
    slideArr[counter % n].classList.remove("hidden-slide");
    slideArr[next].classList.add("hidden-slide");
    slideArr[next].classList.remove("slide");
})


console.log (slideArr);