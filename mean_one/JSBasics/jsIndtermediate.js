let stars = '';

// function starString(n){
//     if (n > 0){
//         for (var i=0; i<n; i++){
//             stars += '*';
//         }
//     }
//    return stars;
// }
// console.log(starString(10));


// function drawStars(arr){
//     // console.log(arr[0]);
//     for(var j=0; j<arr.length; j++){
//         let m = arr[j];
//         for(var k=0; k<m; k++){
//             stars += '*';
//         }
//         stars += '\n';
//     }
//     return stars;
// }
// console.log(drawStars([4,2,20]));

function drawStars2(arr){
    // console.log(arr[0]);
    for(var j=0; j<arr.length; j++){
        let m = arr[j];
        if(m.constructor === String){
            let n = m.slice(0,1);
            for(var p=0; p<m.length; p++){
                stars += n;
            }
        }
        else{
            for(var k=0; k<m; k++){
                stars += '*';
            }
        }
        stars += '\n';
    }
    return stars;
}
console.log(drawStars2([4,'happy',20]));