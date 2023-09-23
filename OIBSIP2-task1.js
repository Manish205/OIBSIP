document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let operator = "";
    let prevInput = "";

    function updateDisplay() {
        display.value = currentInput;
    }

    for (let i = 0; i <= 9; i++) {
        document.getElementById(i.toString()).addEventListener("click", function () {
            currentInput += i.toString();
            updateDisplay();
        });
    }

    document.getElementById("decimal").addEventListener("click", function () {
        if (currentInput.indexOf(".") === -1) {
            currentInput += ".";
            updateDisplay();
        }
    });

    document.getElementById("add").addEventListener("click", function () {
        operator = "+";
        prevInput = currentInput;
        currentInput = "";
    });

    document.getElementById("subtract").addEventListener("click", function () {
        operator = "-";
        prevInput = currentInput;
        currentInput = "";
    });

    document.getElementById("multiply").addEventListener("click", function () {
        operator = "*";
        prevInput = currentInput;
        currentInput = "";
    });

    document.getElementById("divide").addEventListener("click", function () {
        operator = "/";
        prevInput = currentInput;
        currentInput = "";
    });

    document.getElementById("clear").addEventListener("click", function () {
        currentInput = "";
        prevInput = "";
        operator = "";
        updateDisplay();
    });

    document.getElementById("calculate").addEventListener("click", function () {
        if (operator && prevInput && currentInput) {
            switch (operator) {
                case "+":
                    currentInput = (parseFloat(prevInput) + parseFloat(currentInput)).toString();
                    break;
                case "-":
                    currentInput = (parseFloat(prevInput) - parseFloat(currentInput)).toString();
                    break;
                case "*":
                    currentInput = (parseFloat(prevInput) * parseFloat(currentInput)).toString();
                    break;
                case "/":
                    if (currentInput === "0") {
                        alert("Division by zero is not allowed!");
                        currentInput = "";
                        prevInput = "";
                        operator = "";
                    } else {
                        currentInput = (parseFloat(prevInput) / parseFloat(currentInput)).toString();
                    }
                    break;
            }
            updateDisplay();
            prevInput = "";
            operator = "";
        }
    });
});
