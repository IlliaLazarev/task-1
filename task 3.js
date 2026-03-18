let x = 1
let y = 2
let z = 3

console.log("Найбільше:", Math.max(x,y,z));
console.log("Найменше:", Math.min(x,y,z));

if (x % 2 === 0 || y % 2 === 0  || z % 2 === 0) {
    console.log("Є хоча б одне парне число");
}

console.log(x > y && y < z);

let n = 3

let isPrime = true;

for(let i = 2; i < n; i++){
    if(n % i === 0){
        isPrime = false;
        break;
    }
}

console.log("Просте:", isPrime);
