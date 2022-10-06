class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    plus(vector2) {
        let newX = this.x + vector2.x;
        let newY = this.y + vector2.y;
        let finalResult = new Vector(newX,newY);
        return (finalResult);       
    }

    minus(vector2) {
        let newX = this.x - vector2.x;
        let newY = this.y - vector2.y;
        let finalResult = new Vector(newX,newY);
        return (finalResult);       
    }

    get length(){
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }
}

let vectorTest = new Vector(6,8);
let vectorTest2 = new Vector(3,4);
console.log(vectorTest.length);
//10
console.log(vectorTest.plus(vectorTest2));
//Vector {x: 9, y: 12}
console.log(vectorTest.minus(vectorTest2));
//Vector {x: 3, y: 4}