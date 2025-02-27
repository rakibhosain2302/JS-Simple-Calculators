

function Calculator() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    let result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = "Please enter valid numbers";
        return;
    }

    if (operator === "+") {
        result.innerHTML = `Addition Result Is: ${num1 + num2}`;
    } else if (operator === "-") {
        result.innerHTML = `Subtraction Result Is: ${num1 - num2}`;
    } else if (operator === "*") {
        result.innerHTML = `Multiplication Result Is: ${num1 * num2}`;
    } else if (operator === "/") {
        if (num2 === 0) {
            result.innerHTML = "Cannot divide by zero";
        } else {
            result.innerHTML = `Division Result Is: ${num1 / num2}`;
        }
    } else {
        console.log("Invalid Answer");
    }
}


function reset() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operator').value = '+'; // Default operator set
    document.getElementById('result').innerHTML = '';
}

