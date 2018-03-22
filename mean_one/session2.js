//feb lecture
function Person(name, items){
    if(!(this instanceof Person)){
        console.log('not an instance');
        return new Person(name, items);
    }
    this.name = name;
    this.items = items;
    // this.take = take;
    Person.prototype.take = function take(item, target){
        if (!target || !Array.isArray(target.items)) {
            throw new Error('target must have an items array');
        }
        for (let index = 0; index < target.items.length; index++){
            if (target.items[index] === item){
                target.items.splice(index,1);
                this.items.push(item);
                return true;
            }
        }   
    return false;
    };
    Person.prototype.toString = function(){
        return 'person:  ${ this.name }';
    };   // return person; //return person obj.
}
const nicci = new Person('nicci', ['sand','shells']);
const maya = Person('maya',['helemet', 'surfboard','sandals']);
nicci.take('sandals',maya);

