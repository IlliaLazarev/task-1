let integer = 10;
let floatNumber = 5.5;
let text = "Hello";
let isTrue = true;

console.log(typeof integer);
console.log(typeof floatNumber);
console.log(typeof text);
console.log(typeof isTrue);

integer = "10";
floatNumber = "5.5";
text = 100;
isTrue = 0;

console.log(typeof integer);
console.log(typeof floatNumber);
console.log(typeof text);
console.log(typeof isTrue);

let result = 5 + "5";
console.log(result);

console.log(Number(true));
console.log(Number(false));

let person = {
    name: "Ivan",
    age: 20,
    isStudent: true
};

console.log(JSON.stringify(person));
