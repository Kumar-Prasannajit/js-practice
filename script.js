// Calculator ->

function calculateSum(num1, num2) {
    return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
    return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
    return num1 * num2;
}

console.log(calculateProduct(13, 5));


function calculateQuotient(num1, num2) {
    return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
    return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
    return Math.sqrt(num);
}

// email masker ->

function maskEmail(email){
  const indexof = email.indexOf("@");
  const username = email.slice(0, indexof);
  const maskedPart = username.slice(1,-1);
  const domain = email.slice(indexof);
  const mask = maskedPart.replace(/./g, "*");
  return `${username[0]}${mask}${username[username.length - 1]}${domain}`;
}
let email = "apple.pie@example.com";
console.log(maskEmail(email));

// Loan Qualification Checker ->

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);

// Leap Year Checker ->

function isLeapYear(num) {
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    return `${num} is a leap year.`;
  } else {
    return `${num} is not a leap year.`;
  }
}

const year = 2024; 
const result = isLeapYear(year);
console.log(result);

// Truncate String ->

function truncateString(str, num){
  if(str.length <= num){
    return str;
  }else{
    return str.slice(0, num) + "...";
  }
}

// closure example ->
// This is an example of a closure that maintains a private counter.

const counter = (function () {
  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.


//currying

function add3(a){
  return function (b){
    return function(c){
      return a + b + c;
    }
  }
}
console.log(add3(2)(3)(5))
//another way

const addN = (a) => (b) => (c) => a + b + c;
console.log(addN(1)(2)(3));

//curring example

function sendingAutoemail(to){
  return function (subject){
    return function(content){
      return `sending email: ${to}, subject: ${subject}-${content}`
    }
  }
}

let mailid = "aditya@example.com";
let sub = "order confirmed";
let dets = "Dear Sir your order has been confirmed. Order ID: 122212"
console.log(sendingAutoemail(mailid)(sub)(dets));

// Another way

const sendmail = (id) => (subj) => (content) => `sending email: ${id}, subject: ${subj}-${content}`;
console.log(sendmail("adi@devicePixelRatio.com")("order cancelled")("order has been cancelled"));

//composing functions

function summation(a, b) {
    return a + b;
}

function square(num) {
    return num * num;
}

function compose2functions(func1, func2) {
    return function(a, b) {
        return func2(func1(a, b));
    };
}
const squareOfSum = (compose2functions(summation, square));
console.log(squareOfSum(2, 3)); // Output: 25 (since (2 + 3)^2 = 25)

// another way to compose functions
const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b));
console.log(c2f(summation, square)(4, 5)); // Output: 81 (since (4 + 5)^2 = 81)

// compose anynumber of functions
function compose(...fns){
  return function(...values){
    return fns.reduce((a, b) => b(a), values);
  };
}

const multiply = (args) => args[0] * args[1];
function squareNumber(num) {
    return num * num;
}
const finalValue = compose(multiply, squareNumber);
console.log(finalValue(2, 3));

// Another way to compose any number of functions
const composeAny = (...fns) => (...vals) => fns.reduce((a, b) => b(a), vals);
let coposeAll = composeAny(multiply, squareNumber, (num) => num + 1);
console.log(coposeAll(2, 3)); // Output: 37 (since ((2 * 3)^2) + 1 = 37)
