const operator = document.querySelector(".operator");
const number = document.querySelector(".number");

function getHistory() {
    return document.querySelector("#history_value").innerText;
}

function getOutput() {
    return document.querySelector("#output_value").innerText;
}

function printHistory(num) {
    document.querySelector("#history_value").innerText = num;
}

function printOutput(num) {
    document.querySelector("#output_value").innerText = num;
}