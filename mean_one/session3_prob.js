function orderSupplies(item, callback){
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;

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
            }
        };
        callback(warehouse[item]);
    }, deliveryTime);
}
//pass in string info. and callback (a function)
orderSupplies('paint', function(paint){
    console.log(paint);
    console.log(`received ${paint.product} time to ${paint.directions()}`);
});
orderSupplies('brush', function (brush) {
    console.log(brush);
});