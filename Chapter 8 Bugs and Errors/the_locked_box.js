/*
Consider the following (rather contrived) object:
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};
It is a box with a lock. There is an array in the box, but you can get at it only
when the box is unlocked. Directly accessing the private _content property is
forbidden.
Write a function called withBoxUnlocked that takes a function value as argument,
unlocks the box, runs the function, and then ensures that the box
is locked again before returning, regardless of whether the argument function
returned normally or threw an exception.
*/

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(functionArgument){
    box.unlock()
    console.log(`lock = ${box.locked}`)
    try{
        functionArgument();
    }
    finally{
        box.lock();
    }
}


function justError(){
    throw new Error('It\'s an error');
}


//Test
console.log(`lock = ${box.locked}`)
try {
    withBoxUnlocked(justError);
}
catch(e){
    console.log(e.message);
}
console.log(`lock = ${box.locked}`)

//lock = true
//lock = false
//It's an error
//lock = true
