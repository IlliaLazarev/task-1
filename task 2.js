let a = 5
let b = 8.4
let c = 10.8

let average = (a + b + c) / 3;
console.log("Середнє: ", average);

console.log("Модуль: ", Math.abs(a));
console.log("Округлення вверх: ", Math.ceil(b));
console.log("Округлення вниз: ", Math.floor(c));
console.log("Степінь: ", Math.pow(a,2));

console.log("Ділиться на 5: ", a % 5 === 0);
console.log("Ділиться на 7: ", b % 7 === 0);

if (a + b > c && a + c > b && b + c > a) {
    console.log("Трикутник може існувати!");
} else {
    console.log("Трикутник не може існувати!");
}
