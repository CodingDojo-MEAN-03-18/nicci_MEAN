// MATH 1
function zero_negativity(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            return false;
        }
        return true;
    }
    return;
}
console.log(zero_negativity([1,2,3]));
// MATH 2
function is_even(x){
    if(x%2 === 0){
        return true;
    }
    return false;
}
console.log(is_even(2));
//math3
function how_many_even(arr){
    let count = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 === 0){
            count += 1;
            // console.log(count);
        }
    }
    return "number of even values: " + count;
}
console.log(how_many_even([1,2,3,4]));

//Math 4
function create_dummy_array(n){
    let a=[];
    for(var m=0; m<n; m++){
        b = Math.floor((Math.random()*10)+1);
        a.push(b);
    }
    let c;
    let d;
    c = a.splice();
    console.log('c: '+c);
    d = c.join('');
    return d;
}
console.log(create_dummy_array(2));
