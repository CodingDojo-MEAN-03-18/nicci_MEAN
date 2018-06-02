function counter() { //PARENT SCOPE 
    var count = 0;
    function childScope() { //CHILD SCOPE:KNOWS PARENT AND GLOBAL SCOPE
        var childContent = 'child';
        console.log('counting: ');
        return ++count;
    }
    return childScope;
}

var incr = counter();//GLOBALLY SCOPED
var incr2 = counter(); //GLOBALLY SCOPED

console.log('incr', incr());
console.log('incr', incr());
console.log('incr', incr());
console.log('incr2222222222', incr2());