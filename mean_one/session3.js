// function add(num1, num2){
//     return num1 + num2;
// }

// //cb short for callback
// //this is a function call
// function run(cb){
//     // console.log(cb.toString());
//     cb();
// }
// //handing run an anomous function
// // run(function(){
// //     console.log('running function');
// // });

// function map(array, callback){
//     const results = [];
//     for(let index = 0; index < array.length; index++){
//         console.log('inside loop');
//         // const value = (parseInt(array[index],10)+index);
//         const data = callback(array[index],index);
//         results.push(data);
//     }
//     return results;
// }

// const strArray = ['1','2','3','4'];
// // passing in our callback function
// //the element IS array[index]
// console.log(map(strArray, function(element, number){
//     console.log('inside map cb', element, number);
//     //array[index] is element
//     return(parseInt(element, 10)+ number);
// }));

// //pass an anonymous function, no function body so no need for return... it has an implicit return
// console.log(map(strArray, element => parseInt(element, 10)));

// //if we have {} then we do not have an implicit return
// console.log(map(strArray, (element,index) => {
//     return add(element, index) * index;
// }));
// console.log(map(strArray, add));

console.log('before name');
function printName(name){
    setTimeout(function(){
        console.log(`hello ${name}`);
    }, 2000);
}
printName('nic');
console.log('after name');

// below we pass in something we control to get access to the data that is delayed (callback)
function getThingsFromDB(query, callback){
    //below is the anonymous function to simulate an API or DB taking time to return info.
    return setTimeout(function(){
        const data = ['thing1', 'thing2'];
    //run callback after data, callback is invoked below and then this passes in data on line 75
        callback(data);
        console.log('inside db call');

    }, 2000);
}
// //this function here is what we want to do whenever we receive info
// // for communicating at some point in the future
// getThingsFromDB('select * from things', function(dbInfo){
//     console.log('inside db callback', dbInfo);
// });

//handleData is passed in, handleData is our callback, not invoked, passed in as a reference and then handleData becomes callback on line 55
getThingsFromDB('select * from things', handleData)

//this is the function
function handleData(data){
    console.log('handling data', data);
    //es6 loop
    for(const thing of data) {
        console.log('i have data', thing);
    }
}

