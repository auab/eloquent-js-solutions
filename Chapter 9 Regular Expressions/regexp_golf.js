/*
Code golf is a term used for the game of trying to express a particular program
in as few characters as possible. Similarly, regexp golf is the practice of writing
as tiny a regular expression as possible to match a given pattern, and only that
pattern.
For each of the following items, write a regular expression to test whether any
of the given substrings occur in a string. The regular expression should match
only strings containing one of the substrings described. Do not worry about
word boundaries unless explicitly mentioned. When your expression works, see
whether you can make it any smaller.
1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a period, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter e (or E)
Refer to the table in the chapter summary for help. Test each solution with
a few test strings.
*/

//1. car and cat
let re1 = /ca(r|t)/;
console.log(re1.test('blablabla'));     //false
console.log(re1.test('Thundercats'));   //true

//2. pop and prop
let re2 = /pr?op/;
console.log(re2.test('popop'));             //true
console.log(re2.test('proper question'));   //true

//3. ferret, ferry, and ferrari
let re3 = /ferr(et|y|ari)/;
console.log(re3.test('Enzoferrari'));       //true
console.log(re3.test('ferryboat'));         //true

//4. Any word ending in ious
let re4 = /\b(\w)*ious\b/;
console.log(re4.test(' preciousness'));      //false
console.log(re4.test(' delicious'));        //true

//5. A whitespace character followed by a period, comma, colon, or semicolon
let re5 = /\s(.|,|:|;)/
console.log(re5.test('there ...'));         //true
console.log(re5.test('say that :'));        //true

//6. A word longer than six letters
let re6 = /\b\w{6}\w*\b/;
console.log(re6.test('not a six word'));    //false
console.log(re6.test('a lot of letters'));  //true

//7.A word without the letter e (or E)

let re7 = /\b[a-df-zA-DF-Z]+\b/;
console.log(re7.test('HEY!'));              //false
console.log(re7.test('Just hi'));           //true

