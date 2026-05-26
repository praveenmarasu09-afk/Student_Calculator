function getValues() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    return { num1, num2 };
}

function add() {
    let values = getValues();
    let result = values.num1 + values.num2;
    showResult(result);
}

function subtract() {
    let values = getValues();
    let result = values.num1 - values.num2;
    showResult(result);
}

function multiply() {
    let values = getValues();
    let result = values.num1 * values.num2;
    showResult(result);
}

function divide() {
    let values = getValues();
    if (values.num2 === 0) {
        showResult("Cannot divide by zero");
        return;
    }
    let result = values.num1 / values.num2;
    showResult(result);
}

function percentage() {
    let values = getValues();
    let result = (values.num1 / 100) * values.num2;
    showResult(result);
}

function power() {
    let values = getValues();
    let result = values.num1 ** values.num2;
    showResult(result);
}

function squareRoot() {
    let num1 = Number(document.getElementById("num1").value);
    if (num1 < 0) {
        showResult("Invalid Input");
        return;
    }
    let result = Math.sqrt(num1);
    showResult(result);
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    showResult("");
}

function showResult(result) {
    document.getElementById("result").innerText = "Result: " + result;
}

// Combined Keyboard Shortcuts into a single Event Listener
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents any unexpected form submissions/page reloads
        add();
    } else if (event.key === "Escape") {
        clearFields();
    }
});