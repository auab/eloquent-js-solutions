/*
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/
let fizzBuzzsString1 = '';
for (let i=1; i<=20; i++){
    let print_value;
    if (i%3==0){
        print_value = 'Fizz';
    }
    else if (i%5==0){
        print_value = 'Buzz';
    }
    else {
        print_value = i;
    }
    fizzBuzzsString1 += print_value + ' '
}

console.log(`FizzBuzz 1:\n${fizzBuzzsString1}`);


/*
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
*/

let fizzBuzzsString2 = ''
for (let i=1; i<=20; i++){
    let print_value;
    if (i%3==0){
        if(i%5==0){
            print_value='Fizzbuzz';
        } else{
            print_value = 'Fizz';
        }
    }
    else if (i%5==0){
        print_value = 'buzz';
    }
    else{
        print_value = i;
    }
    fizzBuzzsString2 += print_value + ' ';
}
console.log(`FizzBuzz 2:\n${fizzBuzzsString2}`);
