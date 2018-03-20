// const x = [];
// const y = [];
// const z = [9,10,6,5,-1,20,13,2];
// const names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
// function jsBasicsOne(num){
//     function yell(string){
//         return string.toUpperCase;
//     }
//     x.push('coding');
//     x.push('dojo');
//     x.push('rocks')
//     y.push(num);
//     console.log(y);   
//     console.log(x);
//     x.pop(x.length-1);

//     for(var i = 0; i<z.length; i++){
//         console.log(z[i]);
//     }
//     for (var i = 0; i < z.length-1; i++) {
//         console.log(z[i]);
//     }
//     for(var j = 0;j<names.length;j++){
//         console.log('name length: ' + names[j].length);
//         if (names[j].length === 5){
//             console.log('Wow, ' + names[j] + 'is exactly 5 characters in length!');
//         }
//         else{
//             console.log()
//         }
//     }
//     return x;
// }
// console.log(jsBasicsOne(88));

function yell(string) {
    var a =[];
    for(var i=0; i<string.length;i++){
        let b;
        b = (string.slice(i,i+1)).toUpperCase();
        a.push(b);
    }
    var c;
    c = a.join('');
    console.log(c);
    console.log('result for Array (a) push c: ' + a.push(c));
    return ('returned value is: ' + c);
}
console.log(yell('life is good!'));
// console.log(push);


//simulated really slow DB call.
function getStuffFromDatabase(callback) {
    var data;
    var myTimer = setTimeout(function () {
        if (typeof (callback) == 'function') {
            data = [{ name: 'Todd' }, { name: 'Michael' }, { name: 'Portia' }];
            callback(data);
        }
    }, 10000);
    return data;
}
// ************CHANGES HERE **************
function requestDataFromDatabase() {
    var data = getStuffFromDatabase(function myCallback(data) { // ooh shiny callback!.. when is it invoked???
        console.log(data, "ASynchronous");
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        }
    });
    console.log(data, "Synchronous");
}
//***************** END CHANGES **********************
function catchFly() {
    console.log('I just caught a fly!');
}
requestDataFromDatabase();
// keep running my program!
console.log('Hello');
catchFly();
//etc.

