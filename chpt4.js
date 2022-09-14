// THE SUM OF A RANGE

function range_f(a,b, step=1){
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


function sum_f(inputArray){
    let sumResult = 0;
    for (elementArray of inputArray){
        sumResult += elementArray;
    }
    return sumResult;
}

//REVERSING AN ARRAY

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

//let arrayTest = [1,2,3,4];
//console.log(reverseArray(arrayTest));


// A LIST
function arrayToList(inputArray){
    let arrayLength = inputArray.length;
    if (arrayLength == 1){
        return {value: inputArray[0], rest: null}
    } else{
        return {value: inputArray[0], rest: arrayToList(inputArray.slice(1))};
    }
}

console.log(arrayToList([1,2,3]));

function listToArray(inputList){
    let resultArray = [];
    for( i = inputList; i != null; i = i.rest ){
        resultArray.push(i.value);
    }
    return resultArray;
}