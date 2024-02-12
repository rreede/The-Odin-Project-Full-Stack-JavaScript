

function add(number1,number2) {
    return(number1 + number2);
}

function subtract(number1,number2) {
    return(number1 - number2);
}

function multiply(number1,number2) {
    return(number1 * number2);
}

function divide(number1,number2) {
    return(number1 / number2);
}

let firstNumber = 0;
let operator = 0;
let secondNumber = 0;

function operate(number1, operator, number2) {

    let result = 0;

    if(operator == '+') {
       let result = add(number1, number2);
       return result;
    } else if(operator === '-'){
        let result = (number1, number2);
        return result;
    } else if(operator === '*'){
        let result = (number1, number2);
        return result;
    } else if(operator === '/') {
        let result = (number1, number2);
        return result;
    }

}

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equals = document.querySelector('.equals');
let clear = document.querySelector('.clear');

