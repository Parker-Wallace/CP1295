const numbers = [1,2,2,3,4,5,5,6,7,8,9];
console.log(numbers);
const nodupes = new Set(numbers)
console.log(nodupes)
console.log(Array.from(nodupes))