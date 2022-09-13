let minimun_func = (a,b) => (a<b ? a : b);

const isEven = function(inputNumber){
    if (inputNumber == 0){
        return true;
    } else if (inputNumber == 1){
        return false;
    } else{
        return isEven(inputNumber-2);
    }
}


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
let countbs = defineCountChar('b')
console.log(countbs('BOBObbB'));