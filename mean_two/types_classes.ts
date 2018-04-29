var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number>[1, 2, 3, 4];
let myObj = { [key:string]: (string | number) } = { 
    name: 'Bill' 
};
let anythingVariable: any = "Hey";
anythingVariable = 25;
var arrayOne: boolean[true, false, true, true];
arrayTwo = [1, 'abc', true, 2];
const myObj = { 
    x: 5, y: 10 
};
// object constructor
class MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());

const myNodeInstance: MyNode = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction() void{
    console.log("Hello World");
    return;
}
function sendingErrors(): never {
    throw new Error('Error message');
}

// function myFunction(val: string) void{
//     console.log("Hello World");
//     return;
// }
// function sendingErrors(message: string): never{
//     throw new Error('Error message');
// }
