/*
For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
*/
function reverseArray(inputArray){
    let arrayLength = inputArray.length;
    let resultArray = [];
    for (let i = arrayLength-1; i>=0; i--){
        resultArray.push(inputArray[i]);
    }
    return resultArray;
}

function reverseArrayInPlace(inputArray){
    let arrayLength = inputArray.length;
    for (let i = 0; i<arrayLength/2; i++){
        let temp = inputArray[i];
        inputArray[i] = inputArray[arrayLength-1-i];
        inputArray[arrayLength-1-i] = temp;
    }
    return inputArray;
}

let arrayTest = [1,2,3,4];
console.log(reverseArray(arrayTest));
//(4) [4, 3, 2, 1]
console.log(arrayTest);
//(4) [1, 2, 3, 4]
console.log(reverseArrayInPlace(arrayTest));
//(4) [4, 3, 2, 1]
console.log(arrayTest);
//(4) [4, 3, 2, 1]
