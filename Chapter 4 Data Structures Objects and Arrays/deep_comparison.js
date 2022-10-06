/*
Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties
of objects to compare them.
*/

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
    };
let day2 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
    };

let day3 = {
    squirrel: true,
    events: ["work", "touched tree", "pizza", "running"]
    };

let day4 = {
    squirrel: false,
    events: ["touched tree", "pizza", "running"]
    };


function deepEqual(element1, element2){
    if(typeof(element1)!=typeof(element2)) return false; //false for different types
    if(typeof(element1)!='object'||(element1===null||element2===null)) return (element1===element2); //return equality for not objects
    if(Object.keys(element1).length!=Object.keys(element2).length) return false; //false for different number of elements
    for (let keyObject of Object.keys(element1)){
        if(element2[keyObject]==undefined) return false; //false for element inexistcene
        else if(deepEqual(element1[keyObject],element2[keyObject])==false) return false; //false if one recursive comparison fails
    }
    return true;
}
console.log(deepEqual(day1,day2));
//true
console.log(deepEqual(day1,day3));
//false
console.log(deepEqual(day1,day4));
//false
console.log(deepEqual(null,null));
//true