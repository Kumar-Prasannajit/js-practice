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

//simple compose function
function simpleCompose(...fns) {
    return function(...args) {
        return fns.reduceRight((acc, fn) => [fn(...acc)], args)[0];
    };
}
const add = (a, b) => a + b;
const multiplyByTwo = (num) => num * 2;
const composedFunction = simpleCompose(multiplyByTwo, add);
console.log(composedFunction(2, 3)); // Output: 10 (since (2 + 3) * 2 = 10)

//IIFE: Immediately Invoked Function Expression
(function() {
    const message = "This is an IIFE example.";
    console.log(message);
})();

// Another IIFE example
(function(name) {
    console.log(`Hello, ${name}! This is an IIFE example.`);
})("Aditya");

// IIFE with parameters
(function(a, b) {
    console.log(`The sum of ${a} and ${b} is ${a + b}.`);
})(5, 10);

// IIFE with return value
(function(a, b) {
    return a * b;
})(4, 5); // Output: 20

// IIFE with arrow function
(() => {
    const greeting = "Hello from an IIFE with arrow function!";
    console.log(greeting);
})();

// IIFE with arrow function and parameters
((name) => {
    console.log(`Hello, ${name}! This is an IIFE with arrow function.`);
})("Aditya");

// IIFE with arrow function and return value
((a, b) => {
    return a - b;
})(10, 5); // Output: 5

// IIFE ATM example
const atm = (function(initialBalance){
  let balance = initialBalance;
  return {
    deposit: function(amount) {
      if(amount <= 0) {
        console.log("Amount should be greater than 0");
      } else {
        balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${balance}`);
      }
    },
    withdraw: function(amount) {
      if(amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        console.log(`Withdrawn: ${amount}. New balance: ${balance}`);
      }
    },
    checkBalance: function() {
      console.log(`Current balance: ${balance}`);
    }
  };
})(100); // Initial balance set to 100

// Example usage:
atm.checkBalance();
atm.deposit(50);
atm.withdraw(30);
atm.withdraw(200);
atm.deposit(-10);
atm.checkBalance();

// IIFE with private variables
const counterIIFE = (function() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
})();

//Iterators
function makeIterator(start=0, end=Infinity, step=1) {
  let current = start;
  return {
    next: function() {
      if (current < end) {
        const value = current;
        current += step;
        return { value, done: false };
      } else {
        return { done: true };
      }
    }
  };
}
// Example usage:
const iterator = makeIterator(0, 10, 2);
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: 8, done: false }
console.log(iterator.next()); // { done: true }

// Another iterator example
function createRangeIterator(start, end, step = 1) {
    let current = start;
    return {
        next: function() {
            if (current < end) {
                const value = current;
                current += step;
                return { value, done: false };
            } else {
                return { done: true };
            }
        }
    };
}

// Example usage:
const rangeIterator = createRangeIterator(1, 10, 2); 
console.log(rangeIterator.next()); // { value: 1, done: false }
console.log(rangeIterator.next()); // { value: 3, done: false }
console.log(rangeIterator.next()); // { value: 5, done: false }
console.log(rangeIterator.next()); // { value: 7, done: false }
console.log(rangeIterator.next()); // { value: 9, done: false }
console.log(rangeIterator.next()); // { done: true }

// Another iterator example with a custom object
function createObjectIterator(obj) {
    const keys = Object.keys(obj);
    let index = 0;
    console.log(keys);

    return {
        next: function() {
            if (index < keys.length) {
                const key = keys[index++];
                return { value: { key, value: obj[key] }, done: false }; //****** */
            } else {
                return { done: true };
            }
        }
    };
} 
// Example usage:
const myObject = { a: 1, b: 2, c: 3 };
const objectIterator = createObjectIterator(myObject);
console.log(objectIterator.next()); // { value: { key: 'a', value: 1 }, done: false }
console.log(objectIterator.next()); // { value: { key: 'b', value: 2 }, done: false }
console.log(objectIterator.next()); // { value: { key: 'c', value: 3 }, done: false }
console.log(objectIterator.next()); // { done: true }