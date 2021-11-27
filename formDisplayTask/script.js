const inputName = document.getElementById("name");
const inputSurname = document.getElementById("surname");
const inputDate = document.getElementById("date");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const submitButton = document.getElementById("submitButton");
// const arr = [0, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", 'Dec']

submitButton.addEventListener("click", () => {
    let obj = {};

    obj.name = inputName.value;
    obj.surname = inputSurname.value;
    obj.date = inputDate.value;
    obj.email = inputEmail.value;
    obj.password = inputPassword.value;
    alert(JSON.stringify(obj));
})

inputElement.addEventListener("keyup", (e) => {
    paragraphElem.textContent = inputElement.value;
})