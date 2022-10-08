/*
Say you have a function primitiveMultiply that in 20 percent of cases multiplies
two numbers and in the other 80 percent of cases raises an exception
of type MultiplicatorUnitFailure. Write a function that wraps this clunky
function and just keeps trying until a call succeeds, after which it returns the
result.
Make sure you handle only the exceptions you are trying to handle.
*/

class MultiplicatorUnitFailure extends Error {}


function primitiveMultiply(a,b){
    let randomNumber = Math.random();
    if (randomNumber<0.2){
        return a*b;
    }
    else{
        throw new MultiplicatorUnitFailure
    }    
}


function tryMultiplication(a,b){
    for(;;){
        try {
            let result = primitiveMultiply(a,b);
            console.log(`Multiplication worked! The result is ${result}`);
            break;
        }
        catch(e){
            if (e instanceof MultiplicatorUnitFailure){
                console.log(`Multiplication did not work. Trying again...`)
            }
            else {
                throw e;
            }
        }
    }
}

tryMultiplication(2,8);