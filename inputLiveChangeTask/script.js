const inputElement = document.getElementById("input");
const paragraphElem = document.getElementById("inputText");
// const arr = [0, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", 'Dec']

inputElement.addEventListener("keydown", (e) => {
    paragraphElem.textContent = inputElement.value;
})

inputElement.addEventListener("keyup", (e) => {
    paragraphElem.textContent = inputElement.value;
})