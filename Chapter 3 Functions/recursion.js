/*
We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
*/

function isEven(inputNumber){
    if (inputNumber == 0){
        return true;
    } else if (inputNumber == 1){
        return false;
    } else{
        return isEven(inputNumber-2);
    }
}

console.log(isEven(10));
//true

console.log(isEven(21));
//false