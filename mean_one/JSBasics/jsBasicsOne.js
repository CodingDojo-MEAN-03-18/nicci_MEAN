const x = [];
// var x = [];
function jsBasicsOne(){
    x.push('coding');
    x.push('dojo');
    x.push('rocks')
    console.log(x);
    x.pop(x.length-1);
    return x;
}
console.log(jsBasicsOne());