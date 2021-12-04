const bgElem = document.getElementById("background");
const fgElem = document.getElementById("foreground");
const btn = document.getElementById("applyBtn");
const divElem = document.getElementById("container");

function checkHexaDecimal(color) {
    if (color[0] != '#')
        return 1;
    let hexArr = '0123456789abcdefABCDEF'.split('');
    let arr = color.split('').slice(1);
    return !arr.every((elem) => hexArr.includes(elem));
}

btn.addEventListener("click", () => {
    let bgColor = bgElem.value;
    let fgColor = fgElem.value;
    if (checkHexaDecimal(bgColor) || checkHexaDecimal(fgColor)){
        console.log("error");
        return ;
    }
    divElem.style.color = fgColor;
    divElem.style.background = bgColor;
})