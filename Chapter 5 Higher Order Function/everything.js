/*
Analogous to the some method, arrays also have an every method. This one
returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays, and every is
like the && operator.
Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.
*/


function everyFunc(inputArray, testFunction){
    for(arrayElement of inputArray){
        if(testFunction(arrayElement)==false){
            return false;
        }
    }
    return true;
}
console.log(everyFunc2([1,2,3],n=> n<=3));
//true

function everyFunc2(inputArray, testFunction){
    return !(inputArray.some(n=>!testFunction(n)));
}
console.log(everyFunc2([1,2,3],n=> n<=3));
//true