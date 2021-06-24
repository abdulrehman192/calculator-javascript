const operator = document.querySelectorAll(".operator");
const number = document.querySelectorAll(".number");

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

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        let value = getOutput();
        if (value == "0") {
            value = "";
        }
        value = value + this.id;
        printOutput(value);

    });
}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function()

        {
            console.log(this.id);
            if (this.id == "clear") {
                printHistory("0");
                printOutput("0");
            } else if (this.id == "backspace") {
                let value = getOutput();

                if (value) {
                    value = value.substr(0, value.length - 1);
                    printOutput(value);
                    if (value.length == 0) {
                        printOutput("0");
                    }
                } else {
                    printOutput("0");
                }
            } else {
                let history = getHistory();
                let output = getOutput();

                if (output == "" && history != "") {
                    if (isNaN(history[history.length - 1])) {
                        history = history.substr(0, history.length - 1);
                    }
                }

                if (output != "" && history != "") {
                    if (history == "0") {
                        history = "";
                    }
                    history = history + output;
                    if (this.id == "=") {
                        let result = eval(history);
                        printOutput(result);
                        printHistory("0")
                    } else {
                        history = history + this.id;
                        printHistory(history);
                        printOutput("0");
                    }
                }
            }
        });
}