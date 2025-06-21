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

//Generator functions
function* evenNums(){
  yield 0;
  yield 2; 
  yield 4;
  yield 6;
  yield 8;
  yield 10;
}

// Example usage:
const evenIterator = evenNums();
for (const num of evenIterator) {
    console.log(num); // Output: 0, 2, 4, 6, 8, 10
}

// Another generator function example
function* fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}
// Example usage:
const fibIterator = fibonacci(10);
for (const num of fibIterator) {
    console.log(num); // Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
}

// Another generator function example with a custom object
function* objectGenerator(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            yield { key, value: obj[key] };
        }
    }
}
// Example usage:
const myObj = { a: 1, b: 2, c: 3 };
const objGen = objectGenerator(myObj);
console.log(objGen);
for (const item of objGen) {
    console.log(item); // Output: { key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }
}

// Another generator function example with a range
function* rangeGenerator(start, end, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}
// Example usage:
const rangeGen = rangeGenerator(1, 10, 2);
for (const num of rangeGen) {
    console.log(num); // Output: 1, 3, 5, 7, 9
}

// Another generator function example with a custom sequence
function* customSequenceGenerator() {
    let current = 1;
    while (true) {
        yield current;
        current += 2; // Generates odd numbers
    }
}
// Example usage:
const customSeqGen = customSequenceGenerator();
console.log(customSeqGen.next().value); // Output: 1
console.log(customSeqGen.next().value); // Output: 3
console.log(customSeqGen.next().value); // Output: 5

// Another generator function example with a custom sequence and a limit
function* limitedSequenceGenerator(limit) {
    let current = 1;
    let count = 0;
    while (count < limit) {
        yield current;
        current += 2; // Generates odd numbers
        count++;
    }
}
// Example usage:
const limitedSeqGen = limitedSequenceGenerator(5);
for (const num of limitedSeqGen) {
    console.log(num); // Output: 1, 3, 5, 7, 9
}

// Another generator function example with a custom sequence and a condition
function* conditionalSequenceGenerator(condition) {
    let current = 1;
    while (current <= 100) {
        if (condition(current)) {
            yield current;
        }
        current++;
    }
}
// Example usage:
const isEven = (num) => num % 2 === 0;
const conditionalSeqGen = conditionalSequenceGenerator(isEven);
for (const num of conditionalSeqGen) {
    console.log(num); // Output: 2, 4, 6, ..., 100 (even numbers up to 100)
}

// Another generator function example with a custom sequence and a callback
function* callbackSequenceGenerator(callback) {
    let current = 1;
    while (current <= 10) {
        yield callback(current);
        current++;
    }
}
// Example usage:
const Square = (num) => num * num;
const callbackSeqGen = callbackSequenceGenerator(Square);
for (const num of callbackSeqGen) {
    console.log(num); // Output: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 (squares of numbers from 1 to 10)
}

// Another generator function example with a custom sequence and a filter
function* filterSequenceGenerator(sequence, filterFn) {
    for (const item of sequence) {
        if (filterFn(item)) {
            yield item;
        }
    }
}
// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isOdd = (num) => num % 2 !== 0;
const filterSeqGen = filterSequenceGenerator(numbers, isOdd);
for (const num of filterSeqGen) {
    console.log(num); // Output: 1, 3, 5, 7, 9 (odd numbers from the array)
}

// Another generator function example with a custom sequence and a transformation
function* transformSequenceGenerator(sequence, transformFn) {
    for (const item of sequence) {
        yield transformFn(item);
    }
}
// Example usage:
const words = ["hello", "world", "javascript", "generator"];
const toUpperCase = (word) => word.toUpperCase();
const transformSeqGen = transformSequenceGenerator(words, toUpperCase);
for (const word of transformSeqGen) {
    console.log(word); // Output: "HELLO", "WORLD", "JAVASCRIPT", "GENERATOR" (words in uppercase)
}

// Another generator function example with a custom sequence and a combination of filter and transformation
function* filterAndTransformSequenceGenerator(sequence, filterFn, transformFn) {
    for (const item of sequence) {
        if (filterFn(item)) {
            yield transformFn(item);
        }
    }
}
// Example usage:
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEvenNumber = (num) => num % 2 === 0;
const double = (num) => num * 2;
const filterAndTransformSeqGen = filterAndTransformSequenceGenerator(mixedNumbers, isEvenNumber, double);
for (const num of filterAndTransformSeqGen) {
    console.log(num); // Output: 4, 8, 12, 16, 20 (even numbers doubled)
}

// Generator function with DOM
const btn = document.getElementById("btn");
function* buttonClickGenerator() {
    btn.innerText = "start fom 1";
    let count = 1;
    while(true){
        yield count;
        count++;
    }
}
const clickGen = buttonClickGenerator();
btn.addEventListener("click", () => {
    const nextValue = clickGen.next().value;
    btn.innerText = `Clicked ${nextValue} times`;
});

// simple function
function simpleFunction() {
    console.log("This is a simple function.");
}

// Example usage:
simpleFunction(); // Output: "This is a simple function."

// various types of functions
const arrowFunction = () => {
    console.log("This is an arrow function.");
}
// Example usage:
arrowFunction(); // Output: "This is an arrow function."

const namedFunction = function namedFunc() {
    console.log("This is a named function.");
}
// Example usage:
namedFunction(); // Output: "This is a named function."

const anonymousFunction = function() {
    console.log("This is an anonymous function.");
}
// Example usage:
anonymousFunction(); // Output: "This is an anonymous function."

const asyncFunction = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("This is an async function.");
        }, 1000);
    });
}
// Example usage:
asyncFunction().then((result) => {
    console.log(result); // Output: "This is an async function." after 1 second
});
// expanation of above code
// The `asyncFunction` is an asynchronous function that returns a Promise.
// Inside the function, we use `setTimeout` to simulate an asynchronous operation.
// After 1 second, the Promise resolves with the string "This is an async function."
// The `asyncFunction` is called, and we use `.then()` to handle the resolved value.

//more types of functions
const generatorFunction = function* () {
    yield "This is a generator function.";
}
// Example usage:
const gen = generatorFunction();
console.log(gen.next().value); // Output: "This is a generator function."

const higherOrderFunction = (callback) => {
    console.log("This is a higher-order function.");
    callback();
}
// Example usage:
higherOrderFunction(() => {
    console.log("This is a callback function.");
}); // Output: "This is a higher-order function." followed by "This is a callback function."

const immediatelyInvokedFunction = (function() {
    console.log("This is an immediately invoked function.");
})(); 
// Output: "This is an immediately invoked function."

const recursiveFunction = function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// Example usage:
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)

// Function with default parameters
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
// Example usage:
greet(); // Output: "Hello, Guest!"
greet("Aditya"); // Output: "Hello, Aditya!"

// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
// Example usage:
console.log(sum(1, 2, 3, 4, 5)); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Function with spread operator
function Multiply(a, b, c) {
    return a * b * c;
}
// Example usage:
const Numbers = [2, 3, 4];
console.log(Multiply(...Numbers)); // Output: 24 (2 * 3 * 4)

// Function with destructuring parameters
function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
// Example usage:
const user = { name: "Aditya", age: 25 };
displayUser(user); // Output: "Name: Aditya, Age: 25"

// Function with object destructuring and default values
function displayProduct({ name, price = 0, category = "General" }) {
    console.log(`Product: ${name}, Price: $${price}, Category: ${category}`);
}
// Example usage:
const product = { name: "Laptop", price: 999 };
displayProduct(product); // Output: "Product: Laptop, Price: $999, Category: General"

// Function with array destructuring
function displayCoordinates([x, y]) {
    console.log(`X: ${x}, Y: ${y}`);
}
// Example usage:
const coordinates = [10, 20];
displayCoordinates(coordinates); // Output: "X: 10, Y: 20"

// Function with array destructuring and default values
function displayPoint([x = 0, y = 0] = []) {
    console.log(`Point: (${x}, ${y})`);
}
// Example usage:
displayPoint(); // Output: "Point: (0, 0)"  
displayPoint([5, 10]); // Output: "Point: (5, 10)"

// Function with callback
function processData(data, callback) {
    const processedData = data.map(item => item * 2);
    callback(processedData);
}
// Example usage:
const data = [1, 2, 3, 4, 5];
processData(data, (result) => {
    console.log("Processed Data:", result); // Output: "Processed Data: [2, 4, 6, 8, 10]"
});

// Function with promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data fetched from ${url}`);
            } else {
                reject("Error: URL is required");
            }
        }, 1000);
    });
}
// Example usage:
fetchData("https://api.example.com/data")
    .then((data) => {
        console.log(data); // Output: "Data fetched from https://api.example.com/data" after 1 second
    })
    .catch((error) => {
        console.error(error); // Output: "Error: URL is required" if no URL is provided
    });

// Function with async/await
async function fetchDataAsync(url) {
    try {
        const data = await fetchData(url);
        console.log(data); // Output: "Data fetched from https://api.example.com/data" after 1 second
    } catch (error) {
        console.error(error); // Output: "Error: URL is required" if no URL is provided
    }
}
// Example usage:
fetchDataAsync("https://api.example.com/data");
fetchDataAsync(); // Output: "Error: URL is required"

//string exceptions example
function validateString(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (str.length === 0) {
        throw new Error('String cannot be empty');
    }
    return `Valid string: ${str}`;
}
// Example usage:
try {
    console.log(validateString("Hello, World!")); // Output: "Valid string: Hello, World!"
    console.log(validateString("")); // Throws Error: "String cannot be empty"
} catch (error) {
    console.error(error.message); // Output: "String cannot be empty"
}

try {
    console.log(validateString(123)); // Throws TypeError: "Input must be a string"
} catch (error) {
    console.error(error.message); // Output: "Input must be a string"
}
