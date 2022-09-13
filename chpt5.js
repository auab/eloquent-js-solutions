// FLATTENING
let testArray = [[1,2,3],[11,13,19],[100,101,102]];
let decomposedArray = testArray.reduce((a,b) => {return a.concat(b)});
//console.log(decomposedArray);

// YOUR OWN FOR LOOP
function ownLoop(inputValue, testFunction, updateFunction, bodyFunction){
    for(let i = inputValue;testFunction(i);i=updateFunction(i)){
        bodyFunction(i);
    };
}
//ownLoop(2,n=>{return n<5},n=>{return (n+1)},n=>{return console.log(`aaa '${n}'`)})

//EVERYTHING
function everyFunc(inputArray, testFunction){
    for(arrayElement of inputArray){
        if(testFunction(arrayElement)==false){
            return false;
        }
    }
    return true;
}

function everyFunc2(inputArray, testFunction){
    return !(inputArray.some(n=>!testFunction(n)));
}
console.log(everyFunc2([1,2,3],n=> n<=3));