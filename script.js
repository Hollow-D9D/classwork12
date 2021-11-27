const buttonElem = document.getElementById("dateButton");
const paragraphElem = document.getElementById("date");
// const arr = [0, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", 'Dec']

buttonElem.addEventListener("click", () => {
    const currentDate = new Date();
    let str = '' + currentDate;
    let printableStr = '';
    printableStr += `${str.substr(8, 2)}/${str.substr(4,3)}/${str.substr(11,4)}`;
    paragraphElem.textContent = printableStr;
})