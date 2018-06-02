function remove(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===val){
            arr[i] = arr[i+1];
        }
    }
    arr.length--;
    return arr;
}

console.log(remove([0,1,2,3],2));