const userInput = document.querySelector('#input-number');

const addBtn = document.querySelector('#btn-add');
const subtractBtn = document.querySelector('#btn-subtract');
const multiplyBtn = document.querySelector('#btn-multiply');
const divideBtn = document.querySelector('#btn-divide');

const currentCalculationOutput = document.querySelector('#current-calculation');
const currentResultOutput = document.querySelector('#current-result');

// console.log('userInput' , userInput);
// console.log('currentCalculationOutput' , currentCalculationOutput);
// console.log('currentResultOutput' , currentResultOutput);

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}

function OutputResult(result, text) {
    currentCalculationOutput.textContent = text;
    currentResultOutput.textContent = result;
}

function add() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    // console.log(operand1,operand2, operand1 + operand2);
    currentResult = operand1 + operand2;
    const calText = `${operand1} + ${operand2}`;
    OutputResult(currentResult, calText);
}

addBtn.addEventListener('click' , add);