/*
Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.
If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified during
iteration.
*/



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

class GroupIterator {
    constructor(group){
        this.index = 0;
        this.group = group; 
    }

    next(){
        if(this.index == this.group.groupValues.length) return {done:true};
        let value = {index: this.index, 
                     value: this.group.groupValues[this.index]};
        this.index++;
        return {value, done: false};

    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

groupTest = Group.from([1,1,2,2,3,3,11]);

for (let {index, value} of groupTest){
    console.log(index,value)
}
//0 1
//1 2
//2 3
//3 11