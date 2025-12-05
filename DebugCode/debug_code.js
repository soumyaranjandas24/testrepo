
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = perform(num1, num2);

        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function perform(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    let add = additon(a, b);
    let sub = subtraction(a, b);
    let mult = multiply(a, b);
    let div = division(a, b);

    // Multiply the numbers
    return [add, sub, mult, div];
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: 
    Addition: ${result[0]}
    Subtraction: ${result[1]}
    Multiplication: ${result[2]}
    Division: ${result[3]}`;
}

function additon(a, b) { return a + b }
function subtraction(a, b) { return a - b }
function multiply(a, b) { return a * b }
function division(a, b) { return a / b }