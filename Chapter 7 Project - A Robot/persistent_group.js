class PGroup{
    constructor(array){
        this.groupValues = array;
        Object.freeze(this.groupValues);
    }
    add(item){
        if(this.groupValues.includes(item)){
            console.log('the group already contains this element');
        } else{
            return new PGroup(this.groupValues.concat(item));
        }   
    }
    delete(item){
        if(this.groupValues.includes(item)){
            return new PGroup(this.groupValues.filter(element=>element!==item)) ;
        }else{
            console.log('this item is not in the group');
        }
    }
    has (item){
        return this.groupValues.includes(item);
    }



    get elements(){
        return this.groupValues;
    }
}

PGroup.empty = new PGroup([]);

groupTest = new PGroup([1,2,3]);

console.log(groupTest.groupValues);
//[ 1, 2, 3 ]
groupTest2 = groupTest.add(4);

console.log(groupTest.groupValues);
//[ 1, 2, 3 ]
console.log(groupTest2.groupValues);
//[ 1, 2, 3, 4 ]
groupTest3 = PGroup.empty.add(3);
console.log(groupTest3.groupValues);
//[ 3 ]

