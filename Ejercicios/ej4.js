// Ruleta
const reds = [1,3,5,7,9,12,14,16,18,23,25,27,30,32,34,36];
function  roullete () {
    let num = Math.floor(Math.random() * 37);
    if(num == 0) return [0];
    return [num,num%2==0,reds.includes(num), num>=19];
}

console.log(roullete());
console.log(roullete());
console.log(roullete());
console.log(roullete());
console.log(roullete());
console.log(roullete());
console.log(roullete());
console.log(roullete());
console.log(roullete());
console.log(roullete());
console.log(roullete());
console.log(roullete());
console.log(roullete());
console.log(roullete());
