/*
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
*/
function countBs(inputString){
    strLength = inputString.length
    let numberBs = 0;
    for( let i=0; i<strLength; i++){
        if (inputString[i] == 'B'){
            numberBs++;
        }
    }
    return numberBs;
}
console.log(countBs('BooBBb'))
//3


/*
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.
*/

function defineCountChar(inputChar){
    return countChar = function(inputString){
        strLength = inputString.length
        let numberChars = 0
        for( let i=0; i<strLength; i++){
            if (inputString[i] == inputChar){
                numberChars++;
            }
        }
        return numberChars;
    };
    
}

let countqs = defineCountChar('q')
console.log(countqs('qUqQ'));
//2