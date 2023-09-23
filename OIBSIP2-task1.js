document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let operator = "";
    let prevInput = "";

    // Function to update the display
    function updateDisplay() {
        display.value = currentInput;
    }

    // Add event listeners to number buttons (0-9)
    for (let i = 0; i <= 9; i++) {
        document.getElementById(i.toString()).addEventListener("click", function () {
            currentInput += i.toString();
            updateDisplay();
        });
    }

    // Add event listener for decimal point
    document.getElementById("decimal").addEventListener("click", function () {
        if (currentInput.indexOf(".") === -1) {
            currentInput += ".";
            updateDisplay();
        }
    });

    // Add event listeners for operators (+, -, *, /)
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

    // Add event listener for clear button
    document.getElementById("clear").addEventListener("click", function () {
        currentInput = "";
        prevInput = "";
        operator = "";
        updateDisplay();
    });

    // Add event listener for equals button
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
