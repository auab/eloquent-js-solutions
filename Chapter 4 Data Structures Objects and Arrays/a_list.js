/*
Objects, as generic blobs of values, can be used to build all sorts of data structures.
A common data structure is the list (not to be confused with array). A
list is a nested set of objects, with the first object holding a reference to the
second, the second to the third, and so on.
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument.
*/

function arrayToList(inputArray){
    let arrayLength = inputArray.length;
    if (arrayLength == 1){
        return {value: inputArray[0], rest: null}
    } else{
        return {value: inputArray[0], rest: arrayToList(inputArray.slice(1))};
    }
}

console.log(arrayToList([1,2,3]));
//{value: 1, rest: {…}}


/*
Also write a listToArray function
that produces an array from a list.
*/

function listToArray(inputList){
    let resultArray = [];
    for( i = inputList; i != null; i = i.rest ){
        resultArray.push(i.value);
    }
    return resultArray;
}

let listInput = {
    value: 1,
    rest: {
        value: 20,
        rest: {
            value: 30,
            rest: null
        }
    }
};

console.log(listToArray(listInput));
// (3) [1, 20, 30]

/*
Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to the
front of the input list,
*/

function prepend(inputList,newElement){
    let arrayFromList = listToArray(inputList);
    arrayFromList.unshift(newElement);
    return arrayToList(arrayFromList);
}
console.log(prepend(listInput,2));
//{value: 2, rest: {…}}
