let displayValue = 0;

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    document.getElementById("display").value = displayValue;
    displayValue = "";
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
        clearDisplay();
    }
}

function appendToDisplay(value) {
    if (displayValue === "0") {
        displayValue = value;
    } else if (/[\+\-\*\/]/.test(value) && /[\+\-\*\/]/.test(displayValue.slice(-1))) {
        return;
    } else {
        displayValue += value;
    }

    document.getElementById("display").value = displayValue;
}

document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (/[0-9+\-*/.]/.test(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") { 
        calculate();
    } else if (key === "Escape") { 
        clearDisplay();
    }
});

window.onload = function () {
    clearDisplay();
};