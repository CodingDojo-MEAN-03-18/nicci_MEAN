function magic_multiply(x, y) {
    if (x.constructor && y.constructor === Number){
        let test1 = x*y;
        console.log(test1);
        return test1;
    }
    // why won't this show up with "all inputs 0"?
    if (x === 0 && y === 0){
        let test2 = 'all inputs 0';
        console.log(test2);
        return test2;
    }
    //test 3
    if ((x.constructor === Array && y.constructor === Number) || (y.constructor === Array && x.constructor === Number)){
        let test3 = null;
        if (x.constructor === Array){
            for (var i =0; i<x.length; i++){
                x[i] *= y;
                test3 = x;
            }
        }    
        if (y.constructor === Array){
            for(var j=0; j<y.length; j++){
                y[i] *= x;
                test3 = y;
            }
        }    
        
        console.log(test3);
        return test3;
    //end test3
    }
//test 4
    if (y.constructor === String){
        let test4 = 'can not multiply by a string in position y.';
        console.log(test4);
        return test4;
    }

    //test5
    if (x.construtor === String){
        for(var k=0; k<y; k++){
            let test5 = x*x;
        }
        console.log(test5);
        return test5;
    }
}

console.log(magic_multiply([1,2,3],1));

// var x=5;

// if (x.constructor === Number){
//     console.log('number');
// }
// if (x.constructor === Array){
//     console.log('array');
// }
