function orderSupplies(item, callback){
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
    // console.log(deliveryTime);

    setTimeout(function(){
        //warehouse is an object with a couple of properties (paint and brush)
        warehouse = {
            paint: {
                product: 'neon green paint',
                directions: function(){ return 'mix'}
            },
            brush: {
                product: 'horsehair brush',
                directions: function(){ return 'start painting'}
            },
            tarp: {
                product: 'a large tarp', 
                directions: function() { return 'cover the floor! ';}
            }
        };
        callback(warehouse[item]);
    }, deliveryTime);
}
// DO NOT MESS WITH ANYTHING ABOVE HERE!!!


//general function for "item"
function receivedItem(item){
    console.log(`received ${item.product} time to ${item.directions()}`);
}
//pass in string info. and callback (a function)
// orderSupplies('paint', receivedItem);

// orderSupplies('brush', receivedItem);


//want to control the flow of information.
// mixing should always occur first

//suggestion
//another callback, store the returned data somehow and once we get everything we expect back.. then display it

//////////////////////////////
// solution #1 
//problem is you CAN NOT order the paint until the brush is delivered and we would like order both at the same time
//WOW THIS IS SLOW! 
// orderSupplies('paint', (item) => {
//     receivedItem(item);

//     orderSupplies('brush', receivedItem);
// });

// setTimeout(() => {
//     orderSupplies('brush', receivedItem);
// }, 3001);
/////////////////////////////

// ///SOLUTION #2///////////////////

// let havePaint = false;
// let count = 1;
// // orderSupplies('brush', (item)=>{
// //     if(havePaint){
// //         receivedItem(item);
// //     } else {
// //         // set an "interval" until paint arrives
// //         const timer = setInterval(()=>{
// //             console.log('checking for paint: '+count);
// //             count++;
// //             if (havePaint){
// //                 receivedItem(item);
// //                 clearInterval(timer);
// //             }
// //         },50);
// //     }        

// // });
// orderSupplies('paint', (item)=>{
//     havePaint=true;
//     receivedItem(item);
// });

// orderSupplies('brush', handleBrush);

// //handleBrush is the callback
// function handleBrush(item){
//     if (havePaint){
//         return receivedItem(item);
//     }
//     console.log('... checking for paint');
//     setTimeout(() => {
//         handleBrush(item)
//     }, 50);
// }

// //////////////////////////
//third solution below
// let havePaint = false;
// let haveBrush = false;

// orderSupplies('brush', (item) => {
//     if (havePaint){
//         return receivedItem(item);
//     }
//     console.log('received brush');
//     haveBrush=item; //need to be a truthy value
// });
// orderSupplies('paint', (item) => {
//     receivedItem(item);
//     if (haveBrush){
//         return receivedItem(haveBrush);
//     }
//     havePaint=true;
// });

const paint = new Promise(function(resolve, reject){
    //wrap order
    orderSupplies('paint',resolve);
 
});
const brush = new Promise(function (resolve, reject) {
    //wrap order
    orderSupplies('brush', resolve);
});
//pass in function to .then() for when promise resolves
// paint
//     .then(function(whatIsThis){
//         receivedItem(whatIsThis);
//         return brush //still a promise
//         .then(function(whatIsThis){
//             // console.log('brush.....');
//             receivedItem(whatIsThis);
//         })
//     })
//     .catch();

paint
    .then(function (whatIsThis) {
        receivedItem(whatIsThis);
        return brush; //still a promise, returning promise into the chain
    })
    .then(function())
    .then(function (item) {
        // console.log('brush.....');
        receivedItem(item);
    })
    .catch();    