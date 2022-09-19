/*
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
*/

function rangeFunction(a,b){
    let rangeArray = [];
    for ( let i=a; i<=b;i++){
        rangeArray.push(i);
    }    
    return rangeArray;
}

console.log(rangeFunction(1,10));
//(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
*/
function sumFunction(inputArray){
    let sumResult = 0;
    for (elementArray of inputArray){
        sumResult += elementArray;
    }
    return sumResult;
}

console.log(sumFunction(rangeFunction(1,10)));
//55

/*
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/

function rangeFunctionWithStep(a,b, step=1){
    let rangeArray = [];
    if (a<b){
        for ( let i=a; i<=b;i += step){
            rangeArray.push(i);
        }    
    }else {
        for ( let i=a; i>=b;i += step){
            rangeArray.push(i);
        }         
    }
    return rangeArray;
}

console.log(rangeFunctionWithStep(5,2,-1));
//(4) [5, 4, 3, 2]