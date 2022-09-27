/*
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays.
*/
let testArray = [[1,2,3],[11,13,19],[100,101,102]];
let decomposedArray = testArray.reduce((a,b) => {return a.concat(b)});
console.log(decomposedArray);
//(9) [1, 2, 3, 11, 13, 19, 100, 101, 102]