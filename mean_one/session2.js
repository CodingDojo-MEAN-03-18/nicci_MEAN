function personMaker(name, items){
    const person = {
        // name: name 
        name
    };
    person.items = items;
    person.take = 
    console.log(person);
    return person; //return person obj.
}

const nicci = personMaker('Nicci', ['sand', 'colones', 'shells']);
const maya = personMaker('Maya', ['surfboard', 'sandals', 'helmet']);

console.log(nicci.name); //dot notation means this is an object
console.log(nicci.items);
console.log(maya.name,maya.items);


function take(item, target){
    if (!target || !Array.isArray(target.items)) {
        throw new Error('target must have an items array');
    }
    for (let index = 0; index < target.items.length; index++){
        if (target.items[index] === item){
            console.log('item', target.items.splice(index,1));
            return true;
        }
    }   
return false;
}
take('sandals', maya);