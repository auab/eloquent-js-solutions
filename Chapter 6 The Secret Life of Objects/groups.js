class Group{
    constructor(){
        this.groupValues = [];
    }
    add(item){
        if(this.groupValues.includes(item)){
            console.log('the group already contains this element');
        } else{
            this.groupValues.push(item);
        }
    }
    delete(item){
        if(this.groupValues.includes(item)){
            let index = this.groupValues.indexOf(item)
            this.groupValues = this.groupValues.slice(0,index).concat(this.groupValues.slice(index+1));
        }else{
            console.log('this item is not in the group');
        }
    }
    has (item){
        return this.groupValues.includes(item);
    }
    static from(iterable){
        let newGroup = new Group();
        for(let item of iterable){
            if(!newGroup.groupValues.includes(item)){
                newGroup.add(item);
            }
        }
        return newGroup;
    }


    get elements(){
        return this.groupValues;
    }
}

testGroup = new Group();
testGroup.add(2);
console.log(testGroup.elements);
//[2]
testGroup.add(3);
console.log(testGroup.elements);
//[2, 3]
testGroup.delete(2);
console.log(testGroup.elements);
//[3]
testGroup.add(2);
console.log(testGroup.elements);
//[3, 2]
testGroup.add(2);
console.log(testGroup.elements);
//the group already contains this element
console.log(testGroup.has(3));
//true
console.log(testGroup.has(5));
//false
console.log(Group.from([1,1,2,2,3,3,]));
//Group {groupValues: Array(3)}
//groupValues: [1, 2, 3]