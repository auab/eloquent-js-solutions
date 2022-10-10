/*
Write an expression that matches only JavaScript-style numbers. It must support
an optional minus or plus sign in front of the number, the decimal dot,
and exponent notation—5e-3 or 1E10—again with an optional sign in front of
the exponent. Also note that it is not necessary for there to be digits in front
of or after the dot, but the number cannot be a dot alone. That is, .5 and 5.
are valid JavaScript numbers, but alone dot isn’t.
*/

regNumber = /(^[+-]?\d+\.?\d*([eE][+-]?\d*)?$)|(^[+-]?\d*\.?\d+([eE][+-]?\d*)?$)/;

console.log(regNumber.test('-1.200'));      //true
console.log(regNumber.test('+1.200e+3'));   //true
console.log(regNumber.test('-.200e+3'));    //true
console.log(regNumber.test('1.E+3'));       //true
console.log(regNumber.test('1.2.E+3'));     //false
console.log(regNumber.test('.E+3'));        //false


