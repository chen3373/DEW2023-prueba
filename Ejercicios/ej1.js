// //Ejercicio 1: Suma array multidimensional
// function arrayMultiSum(arr) {
//     let sum = 0;
//     arr.forEach(element => {
//         if(isNaN(element)) sum += +element; 
//         else if(Array.isArray(element)) sum += arrayMultiSum(element);
//     });
//     return sum;
// }

const arrayMultiSum = (arr) => arr.flat(Infinity).reduce((a,e)=>a+e,0);

let arr = [];
console.log(arr, "->" ,arrayMultiSum(arr));

arr = [4,8,3]; //15
console.log(arr, "->" ,arrayMultiSum(arr));

arr = [[2,4],5,[6,7]]; //24
console.log(arr, "->" ,arrayMultiSum(arr));

arr = [1,2,[5,4],3,6,[[2,4],8,[9,2,0,[1]]],6,[],[8,7]]; //68
console.log(arr, "->" ,arrayMultiSum(arr));
