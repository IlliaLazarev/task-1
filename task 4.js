let name = "Ілля";
let birthYear = "2008";
let city = "Луцьк";
let year = 2026;
let age = year - birthYear;

console.log("Вік: ", age);

if (age < 12){
    console.log("Дитина");
}
else if (age < 18){
    console.log("Підліток");
}
else if (age < 60){
    console.log("Дорослий");
}
else {
    console.log("Літня людина");
}

let capital = "Kyiv";

if (city === capital){
    console.log("Ви живете у столиці");
}
else {
    console.log("Це не столиця");
}
