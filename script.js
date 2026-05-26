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

function clearFields() {

    document.getElementById("num1").value = "";

    document.getElementById("num2").value = "";

    showResult("");
}

function showResult(result) {

    document.getElementById("result").innerText =
        "Result: " + result;
}