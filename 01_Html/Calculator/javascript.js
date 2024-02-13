

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
        let result = subtract(number1, number2);
        return result;
    } else if(operator === '*'){
        let result = multiply(number1, number2);
        return result;
    } else if(operator === '/') {
        let result = divide(number1, number2);
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
let addNumbers = document.querySelector('.add');
let subtractNumbers = document.querySelector('.subtract');
let multiplyNumbers = document.querySelector('.multiply');
let divideNumber = document.querySelector('.divide');
let equals = document.querySelector('.equals');
let clear = document.querySelector('.clear');
let calculation = document.querySelector('.calculation');

one.addEventListener('click', function(e) {


});

clear.addEventListener('click', function() {

    console.log('button clicked');
    calculation.value = '';
    
});







function leapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log('This is a leap year');
        return true;
    } else {
        console.log('This is not a leap year');
        return false;
    }
}



