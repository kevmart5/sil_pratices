const moment = require("moment");
const calculator = require("./src/calculatorMethods");
arr = [2,4,6]
const pepe = 2;
const num = 3;

const sum = calculator.sumTwoNumbers(pepe, num);
const substract = calculator.substractTwoNumbers(pepe, num)
const sumMultipleNumbers = calculator.sumMultipleNumbers(arr)
const myDate = moment().format("YYYY MM DD");

console.log("Hello World", sum);
console.log("Hello World", substract); 
console.log("Hello World", sumMultipleNumbers); 
console.log("My Date =>", myDate);

