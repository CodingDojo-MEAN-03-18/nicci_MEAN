// //1 - predict 'world'; actual 'undefined'
// console.log(hello);
// var hello = 'world';

// //2 - predict 'magnet'; actual 'magnet'
// var needle = 'haystack';
// test();

// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }

// //3 - predict 'super cool'; actual 'super cool'
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// //4 - predict 'half-chicken, chicken'; actual 'chicken, half-chicken'
// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// // 5 - predict 'chicken, chicken'; acutal 'mean is not a function'
// // mean();
// // console.log(food);
// // var mean = function () {
// //     food = "chicken";
// //     console.log(food);
// //     var food = "fish";
// //     console.log(food);
// // }
// // console.log(food);
 
// //6 - predict 'rock rock disco', actual - 'rock r&b disco'
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// //7 - predict 'seattle burbank sanjose', actual - 'seattle burbank seattle'
// //even tho dojo doesn't have var in front of it... JS is forgiving
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);




let x = [1, 2, 3];
if (x.constructor === Array) {
    console.log('Yes x is an array!');
} else {
    console.log('No x is not an array!');
};
