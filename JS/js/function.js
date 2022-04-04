//1. декларативний опис
alert(Sum(2, 3));
alert(Sum(2));
alert(Sum(2, 3, 4));

function Sum(firstNumber = 0, secondNumber = 0) {
    let result = firstNumber + secondNumber;
    return result;
}

function Proc() {

}
alert(Proc());

//2. анонімні функції
var anonymusSum = function (firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    return result;
}

// alert(anonymusSum(3, 5));
// як аргумент
function MakeOperation(firstNumber, secondNumber, operation) {
    return operation(firstNumber, secondNumber);
}

alert(MakeOperation(3, 5, function (x, y) { return x * y }));
alert(MakeOperation(3, 5, Sum));

//самовикликаючась функція
(function (arg) {
    console.log(arg);
})("Test");

//3. Лямбда. Стрілочні
let lambdaSum = (firstNumber, secondNumber) => { return firstNumber + secondNumber; };
let sqr = x => x ** 2; // function(x) {return x**2}

console.log(lambdaSum(3, 5));
console.log(sqr(8));
console.log(MakeOperation(3, 5, (x, y) => x - y));

// //самовикликаючась лямбда функція

(arg => { console.log(arg) })(42);

// //приклад із співбесіди

// let x=5
// (arg=>{console.log(x+arg)})(2)

let x = 2;
function someFunc(y) {
    y++;
    let x = 3;
    x++;
    return x + y;
}
console.log(someFunc(1));

//локальні змінні 
(() => {
    let x = 5;
    console.log(x);
})();

(() => {
    let x = 7;
    x++;
    console.log(x);
})();

//замикання
function Counter() {
    let count = 0;
    return () => count++;
}

let counter1 = Counter(); //counter1 = () => count++;
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
let counter2 = Counter(); //counter2 = () => count++;
console.log(counter2());
counter1 = counter2;


/* випадкове ціле число [from, to]  [3;5]
*/
function RandomInt(from = 0, to = 1) {
    if (to < from) {
        let temp = to;
        to = from;
        from = temp;
    }
    let rnd = Math.random(); //[0, 1)
    let len = to - from + 1;
    let result = rnd * len + from;
    return Math.floor(result);
}


// /* генерує маркований список із count пунктів */
function generateList(count = 1) {
    let template = "<ul>";
    for (let num = 1; num <= count; num++)
        template += `<li> ${num} </li>`;
    template += "</ul>";
    return template;
}

// document.write(generateList(5));

// /* Згенерувати саттю з вказаним заголовком та текстом */

function generateArticle(title, text) {
    return `<article>
        <h3> ${title} </h3>
        <p> ${text} </p> 
    </article>`;
}

// document.write( generateArticle ("title", "Some text"));


//аргументи функції

function someFunc() {
    console.log(arguments);
}

function sumArguments() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++)
        sum += arguments[i];
    return sum;
}

function generateListFromArguments() {
    let template = "<ol>";
    for (let item of arguments)
        template += `<li> ${item} </li>`;
    template += "</ol>";
    return template;
}

document.write(
    generateListFromArguments("Apple", "Milk")
);