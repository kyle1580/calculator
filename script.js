function add(num1 , num2) {
    return num1 + num2;
}

function subtract(num1 , num2) {
    return num1 - num2;
}

function multiply(num1 , num2) {
    return num1 * num2;
}

function divide(num1 , num2) {
    return num1 / num2;
}

function operate(operator , num1 , num2) {
    switch(operator) {
        case '+':
            return add(num1 , num2)
            break;
        case '-':
            return subtract(num1 , num2)
            break;
        case '*':
            return multiply(num1 , num2)
            break;
        case '/':
            return divide(num1 , num2)
            break;
        default:
            break;
    }
}

const display = document.querySelector('.display');
let displayValue = [];
let operator;
let num1;
let num2;
let sum;

function removeTransition() {
    buttons.forEach(button => {
        if(button.classList.contains('clicked')) {
            button.removeEventListener('transitionend',removeTransition)
            button.classList.toggle('clicked');
        }
    })
}

function addToDisplay(id , displayValue) {
    displayValue.push(id);
    display.textContent = displayValue.join('');
}

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach(button => {
    button.addEventListener('click' , () => {
        button.classList.toggle('clicked');
        if(button.classList.contains('number')) {
            addToDisplay(button.id , displayValue)
        }
        if(button.id === 'clear') {
            display.textContent = '';
            displayValue = [];
            sum = undefined;
        }
        if(button.classList.contains('function')) {
            operator = button.id;
            num1 = Number(display.textContent);
            displayValue = [];
            display.textContent = '';
        }
        if(button.id === '=') {
            num2 = Number(display.textContent);
            displayValue = [];
            sum = operate(operator , num1 , num2);
            display.textContent = sum;
            num1 = sum;
            num2 = 0;
        }
        button.addEventListener('transitionend' , removeTransition);
    })
})
